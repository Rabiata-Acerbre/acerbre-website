(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const menu = document.querySelector('.menu-button');
  const links = document.querySelector('.nav-links');
  if (menu && links) {
    const closeMenu = () => {
      links.classList.remove('open');
      menu.setAttribute('aria-expanded', 'false');
      menu.textContent = 'Menu';
    };
    menu.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      menu.setAttribute('aria-expanded', String(open));
      menu.textContent = open ? 'Close' : 'Menu';
    });
    links.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    }, { passive: true });
  }

  if (document.querySelector('.welcome-sequence')) {
    if (reducedMotion) {
      document.documentElement.classList.add('welcome-done');
    } else {
      window.setTimeout(() => document.documentElement.classList.add('welcome-done'), 1550);
    }
  }

  const revealNodes = document.querySelectorAll('.reveal, .reveal-image');
  if (!('IntersectionObserver' in window) || reducedMotion) {
    revealNodes.forEach((node) => node.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.01, rootMargin: '18% 0px 18% 0px' });
    revealNodes.forEach((node) => observer.observe(node));
  }

  const meter = document.querySelector('.scroll-meter span');
  const motionAssets = [...document.querySelectorAll('.motion-asset')];
  let scrollTicking = false;
  const updateScrollEffects = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (meter) meter.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (!reducedMotion) {
      motionAssets.forEach((asset) => {
        const rect = asset.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const distance = (center - window.innerHeight / 2) / window.innerHeight;
        const offset = Math.max(-34, Math.min(34, distance * -34));
        asset.style.setProperty('--parallax', `${offset}px`);
      });
    }
    scrollTicking = false;
  };
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      scrollTicking = true;
      window.requestAnimationFrame(updateScrollEffects);
    }
  }, { passive: true });
  updateScrollEffects();

  const canvas = document.querySelector('#signal-canvas');
  if (canvas && !reducedMotion) {
    const context = canvas.getContext('2d', { alpha: true });
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = true;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = Math.max(1, Math.round(rect.width));
      height = Math.max(1, Math.round(rect.height));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const signalY = (x, time) => {
      const normalized = x / Math.max(width, 1);
      return height * (.59
        + Math.sin(normalized * 15 + time * .00016) * .048
        + Math.sin(normalized * 39 - time * .00008) * .025
        - normalized * .08);
    };

    const draw = (time) => {
      if (!running) return;
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;
      context.strokeStyle = 'rgba(130, 177, 221, .46)';
      context.beginPath();
      for (let x = 0; x <= width; x += 7) {
        const y = signalY(x, time);
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();

      const pulseX = ((time * .085) % (width + 140)) - 70;
      const trailStart = Math.max(0, pulseX - 120);
      context.lineWidth = 2;
      context.strokeStyle = 'rgba(255, 42, 53, .72)';
      context.beginPath();
      for (let x = trailStart; x <= Math.min(width, pulseX); x += 5) {
        const y = signalY(x, time);
        if (x === trailStart) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
      if (pulseX > 0 && pulseX < width) {
        const pulseY = signalY(pulseX, time);
        context.fillStyle = 'rgba(255, 67, 77, .95)';
        context.shadowColor = 'rgba(242, 11, 22, .9)';
        context.shadowBlur = 18;
        context.beginPath();
        context.arc(pulseX, pulseY, 3.4, 0, Math.PI * 2);
        context.fill();
        context.shadowBlur = 0;
      }
      frame = window.requestAnimationFrame(draw);
    };

    document.addEventListener('visibilitychange', () => {
      running = !document.hidden;
      if (running) frame = window.requestAnimationFrame(draw);
      else window.cancelAnimationFrame(frame);
    });
    window.addEventListener('resize', resizeCanvas, { passive: true });
    resizeCanvas();
    frame = window.requestAnimationFrame(draw);
  }
})();
