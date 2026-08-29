---
name: Acerbre Market Observatory
description: Evidence-first retail-trading systems presented with risk in full view.
colors:
  instrument-ink: "#03070d"
  midnight-navy: "#07111d"
  observatory-navy: "#0b1724"
  steel-blue: "#687688"
  cold-steel: "#9aa7b7"
  interface-muted: "#a8b3c0"
  instrument-line: "#263342"
  instrument-line-strong: "#3c4a5b"
  paper-white: "#f3f6f8"
  true-white: "#ffffff"
  signal-red: "#f20b16"
  signal-red-dark: "#bd0811"
  risk-surface: "#17070a"
  risk-line: "#5b151b"
typography:
  display:
    fontFamily: '"Manrope", "Arial Nova", Arial, sans-serif'
    fontSize: "clamp(3.4rem, 6.8vw, 6rem)"
    fontWeight: 770
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Manrope", "Arial Nova", Arial, sans-serif'
    fontSize: "clamp(2.25rem, 4.5vw, 4.8rem)"
    fontWeight: 750
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  title:
    fontFamily: '"Manrope", "Arial Nova", Arial, sans-serif'
    fontSize: "clamp(1.35rem, 2.3vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  body:
    fontFamily: '"Manrope", "Arial Nova", Arial, sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  lede:
    fontFamily: '"Manrope", "Arial Nova", Arial, sans-serif'
    fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: '"DM Mono", "SFMono-Regular", Consolas, monospace'
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  square: "0px"
spacing:
  micro: "6px"
  xs: "8px"
  sm: "12px"
  md: "18px"
  lg: "24px"
  xl: "34px"
  2xl: "48px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal-red}"
    textColor: "{colors.true-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "46px"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-dark}"
    textColor: "{colors.true-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "46px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.true-white}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0 18px"
    height: "46px"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.interface-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "0px"
    height: "46px"
  chip-standard:
    backgroundColor: "transparent"
    textColor: "{colors.interface-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.square}"
    padding: "6px 9px"
  product-card:
    backgroundColor: "{colors.midnight-navy}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
    padding: "34px"
  risk-band:
    backgroundColor: "{colors.risk-surface}"
    textColor: "{colors.paper-white}"
    rounded: "{rounded.square}"
    padding: "56px 0"
---

# Design System: Acerbre Market Observatory

## Overview

**Creative North Star: "The Market Observatory"**

Acerbre should feel like entering a nocturnal research office built to examine markets rather than sell a fantasy about them. The world is disciplined, premium, technical, and evidence-first: midnight surfaces hold steel rules, paper-white conclusions, and a single red decision signal. General pages rely on typography, spacing, and evidence—not candlestick scenery or generic market patterns. AppleTree, Grimmwood Apple, and Bergo artwork is reserved for the homepage product choice and the respective product page; the supplied Grimmwood market imagery is an intentional part of that product identity, not a general site motif.

The composition is editorial rather than modular. Large assertions share asymmetrical grids with evidence, risk, and operating detail; thin borders create structure without turning every idea into a generic card. Motion reads as observation—a scan, trace, resolving image, or measured drift—and the full meaning remains available when animation is absent.

**Key Characteristics:**

- Nocturnal navy surfaces with steel-blue instrumentation.
- Bold Manrope assertions paired with compact DM Mono evidence labels.
- Square geometry, thin rules, and restrained tonal depth.
- Product artwork used only where that product is being evaluated: the homepage systems section and its own page.
- Product-neutral precision-laboratory artwork ornaments the general business story without borrowing AppleTree, Grimmwood Apple, or Bergo symbols.
- Return, limitation, and risk presented in the same visual field.
- Responsive asymmetry that becomes a clear single-column sequence on narrow screens.

## Colors

The palette behaves like an observation instrument: dark optical housing, cool measurement hardware, bright readable output, and one rare red signal.

### Primary

- **Midnight Navy:** The principal surface for identity, product, and information-dense sections; it keeps the site sober without collapsing into featureless black.
- **Observatory Navy:** A slightly lifted surface for method panels, evidence areas, and changes in editorial chapter.

### Secondary

- **Steel Blue:** Supporting instrumentation color for subdued controls and structural cues.
- **Cold Steel:** Secondary copy and metadata that must remain readable without competing with conclusions.

### Tertiary

- **Signal Red:** Reserved for primary action, active state, live trace, point markers, and explicit risk status.
- **Signal Red Dark:** The controlled interaction state for red actions; use it as state feedback, not as an additional decorative red.

### Neutral

- **Instrument Ink:** The deepest page ground and default canvas.
- **Paper White:** The main reading color for body copy and durable information.
- **True White:** The highest-contrast color for headings, selected navigation, and decisive labels.
- **Instrument Line / Instrument Line Strong:** Thin dividers and stronger boundaries that organize dense material without using floating cards.
- **Interface Muted:** Compact labels, chip text, and quiet controls.
- **Risk Surface / Risk Line:** The dedicated dark-red disclosure field and its structural border.

### Named Rules

**The Rare Signal Rule.** Red is functional and scarce. A screen should read as navy, steel, and paper first; red appears only where an action, active reading, or risk condition requires attention.

**The Risk Has a Surface Rule.** Material risk is not buried in neutral fine print. Give it a visible place beside the return or decision it qualifies, using the dedicated risk surface when the disclosure needs chapter-level weight.

## Typography

**Display Font:** Manrope (with Arial Nova, Arial, and sans-serif fallbacks)  
**Body Font:** Manrope (with Arial Nova, Arial, and sans-serif fallbacks)  
**Label/Mono Font:** DM Mono (with SFMono-Regular, Consolas, and monospace fallbacks)

**Character:** Manrope supplies dense, contemporary authority with tightly set headlines; DM Mono turns navigation, system states, captions, and evidence labels into instrument readouts. The pairing is technical without borrowing the visual clichés of a trading terminal.

### Hierarchy

- **Display** (770, fluid 3.4–6rem, 0.94 line-height): Hero assertions and the few chapter-defining statements that must carry the page.
- **Headline** (750, fluid 2.25–4.8rem, 0.98 line-height): Section arguments and strong editorial transitions.
- **Title** (700, fluid 1.35–2rem, 1.08 line-height): Product names, practice titles, and panel-level conclusions.
- **Body** (400, 16px, 1.55 line-height): Explanations and operating detail; favor readable measures around 52–65 characters and never compress disclosures to achieve a denser composition.
- **Lede** (400, fluid 1.05–1.25rem, 1.65 line-height): Framing copy that bridges a large assertion and supporting evidence.
- **Label** (700, 11px, 0.12em letter-spacing, uppercase): Navigation, evidence keys, status, and short actions only.

### Named Rules

**The Assertion and Reading Rule.** Use compressed Manrope for the argument and DM Mono for the reading. Mono labels may annotate an idea but must not become a generic kicker placed above every headline.

**The Evidence Stays Legible Rule.** Risk, methodology, and limitations keep body-readable sizing and contrast even when the surrounding interface becomes denser.

## Layout

The default content shell is capped at 1240px with 24px gutters on desktop, 18px at tablet widths, and 14px on small screens. Major chapters use generous vertical rhythm (112px at full width, roughly 76–78px on mobile) and are divided by one-pixel instrument lines. General business pages pair editorial ledgers with product-neutral precision-laboratory artwork; imagery must clarify research, engineering, testing, evidence, or collaboration rather than decorate with finance clichés.

The spatial grammar is asymmetrical and editorial: opening arguments commonly use a 1.1/0.9 or 1.3/0.7 split, evidence pairs use image-and-copy ratios chosen for the story, and the field ledger alternates image and text. Repetition comes from alignment, rules, and rhythm—not an array of interchangeable cards. At 980px, compound grids become one-column flows; at 640px, media becomes square or naturally stacked, controls remain comfortably tappable, and hierarchy is preserved rather than miniaturized.

**The Read Order Rule.** Responsive collapse must preserve the argument: assertion, context, evidence, implication, and action. Never rely on desktop position alone to connect risk to return.

## Elevation & Depth

The system is flat by default. It uses tonal changes, overlays, thin structural borders, clipped imagery, and restrained inset or text shadows to separate layers. Ambient elevation is exceptional: the signal core may glow, imagery may receive an inset vignette, and translucent instrument rails may blur what is behind them. Cards do not gain generic soft drop shadows.

### Shadow Vocabulary

- **Product Image Vignette** (`inset 0 0 80px 26px rgba(3,7,13,.5)`): May integrate the named product artwork on that product's own page only.
- **Signal Core** (`0 0 44px rgba(242,11,22,.18)`): A rare halo for the active observation point only.
- **Hero Legibility** (`0 2px 22px #03070d`): Keeps introductory copy readable over the observatory field.

### Named Rules

**The Flat Instrument Rule.** Surfaces are structural plates at rest. Convey hierarchy through tone, border, crop, and scale before considering shadow.

## Shapes

Interface geometry is square and machined. Buttons, chips, cards, rails, panels, fields, and disclosure surfaces use zero-radius corners and one-pixel borders. Circular geometry belongs to the market instruments and signal diagrams—not to generic containers or ornamental pills. Pixel art is clipped cleanly at section boundaries and should preserve crisp rendering where the source uses hard pixels.

**The Silhouette Rule.** A circle must read as an instrument, plotted point, or real data form. Do not soften ordinary UI into rounded capsules.

## Components

Components should feel precise and restrained: confident enough for commercial action, but always subordinate to the evidence around them.

### Buttons

- **Shape:** Square, compact instrument control (0px radius, 46px minimum height).
- **Primary:** Signal-red field with true-white mono label and 18px horizontal padding; use for the single decisive action in a local decision area.
- **Hover / Focus:** Shift to Signal Red Dark over 180ms. Focus remains visibly distinguishable and must not depend on color alone.
- **Outline:** Transparent with a steel border that turns white on hover or focus; use for direct contact or a supporting path.
- **Quiet:** Unboxed mono action with a red arrow or directional mark; use inside product and editorial contexts where a filled control would compete with the content.

### Chips

- **Style:** Square, transparent, one-pixel instrument border with muted uppercase mono text and compact 6px by 9px padding.
- **State:** Standard chips classify products. Risk chips use the red border/text treatment only for a genuine elevated-risk attribute; chips are informational, not decorative tags.

### Cards / Containers

- **Corner Style:** Square (0px radius).
- **Background:** Midnight Navy or another established section surface.
- **Shadow Strategy:** Flat by default; hover may move a product card upward by 6px but does not add a drop shadow.
- **Border:** One-pixel strong instrument line at rest; a lighter steel boundary may confirm hover.
- **Internal Padding:** 34px on desktop and 26px on small screens.

### Navigation

The primary navigation is a sticky, translucent ink strip with a thin lower border. Links use compact uppercase DM Mono; the active page is white with a two-pixel red underline. Below 980px, navigation becomes a full-width, square-edged disclosure menu with 56px rows and the commercial button yields to the menu control.

### Signal Method Rail

The method rail is a signature observation sequence: short mono verbs joined by one-pixel steel tracks and moving five-pixel red readings. It may animate to communicate process, but the ordered labels and lines must remain complete and understandable in reduced-motion mode.

### Product Card

The homepage product card pairs the product promise, research lineage, risk profile, licensing metadata, explanation, and commercial status with the corresponding AppleTree, Grimmwood Apple, or Bergo artwork. The same artwork may lead the corresponding product page, but it must not leak into service, method, evidence, partnership, or licensing illustrations.

### Risk Band

The risk band is a chapter-level disclosure, not a footer disclaimer. It uses the dedicated dark-red surface, matching structural border, a direct heading, and comfortably readable body copy. It appears near the relevant decision and never relies on animation or an expandable control.

## Do's and Don'ts

### Do:

- **Do** let evidence, limitations, and risk share the same visual field as performance and purchase actions.
- **Do** use red only for action, active signal, plotted emphasis, or real risk status.
- **Do** build hierarchy with asymmetrical editorial grids, measured spacing, thin borders, and tonal navy layers.
- **Do** reserve AppleTree, Grimmwood Apple, and Bergo artwork for the homepage product choice and their respective product pages, with descriptive alternative text.
- **Do** use the precision-laboratory asset system to distinguish research, engineering, consulting, education, testing, execution, risk, evidence, and partnership chapters.
- **Do** keep every message and interaction understandable with animation disabled, and honor `prefers-reduced-motion`.
- **Do** preserve keyboard access, visible focus, readable contrast, and a coherent mobile reading order.

### Don't:

- **Don't** use generic rounded cards, decorative pills, soft dashboard shadows, or a repeated kicker-above-headline formula.
- **Don't** turn red into a decorative wash or distribute it evenly across the page; its rarity is the point.
- **Don't** separate return from drawdown, historical-simulation limits, product boundaries, or capital-at-risk language.
- **Don't** use animation as spectacle, as the sole carrier of meaning, or as a prerequisite for content visibility.
- **Don't** use generic finance photography, stock candlestick backgrounds, decorative market patterns, or invented customer proof.
- **Don't** repeat AppleTree, Grimmwood Apple, or Bergo symbols outside the homepage product choice and the corresponding product page.
