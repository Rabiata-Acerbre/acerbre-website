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

  const welcomeSequence = document.querySelector('.welcome-sequence');
  if (welcomeSequence && !document.documentElement.classList.contains('welcome-done')) {
    try {
      sessionStorage.setItem('acerbre:welcome:v1', 'seen');
    } catch (_) {}

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
  const motionAssets = Array.from(document.querySelectorAll('.motion-asset'));
  let scrollTicking = false;
  const updateScrollEffects = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (meter) meter.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    if (!reducedMotion) {
      motionAssets.forEach((asset) => {
        const rect = asset.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > window.innerHeight + 120) return;
        const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
        const offset = Math.max(-28, Math.min(28, progress * -22));
        asset.style.setProperty('--parallax', `${offset.toFixed(1)}px`);
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

})();
