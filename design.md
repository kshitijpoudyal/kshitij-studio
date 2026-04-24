---
name: Studio & Portfolio
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#536253'
  on-secondary: '#ffffff'
  secondary-container: '#d3e4d1'
  on-secondary-container: '#576757'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#d6e7d4'
  secondary-fixed-dim: '#bacbb8'
  on-secondary-fixed: '#111f13'
  on-secondary-fixed-variant: '#3c4a3c'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin: 40px
  section-gap: 120px
---

## Brand & Style

This design system is built on the pillars of **Boutique Minimalism** and **Editorial Clarity**. It is designed to position the studio as a high-end, thoughtful partner that prioritizes quality over quantity. The visual language moves away from the "loudness" of traditional tech startups, instead opting for a "Quiet Premium" aesthetic that feels more like a modern architecture firm or a luxury fashion house.

The target audience consists of founders and executives looking for sophisticated product thinking. By utilizing heavy whitespace and a restrained color palette, the UI ensures that the portfolio work—the actual products—remains the centerpiece. The emotional response should be one of calm confidence, reliability, and precision.

## Colors

The color palette centers on a high-contrast foundation of stark blacks and pure whites, softened by a sophisticated spectrum of grays. The primary color is a deep, true black (#000000), used for critical text and structural elements to establish authority.

To prevent the design from feeling overly clinical, a **Refined Sage Green** (#849483) is introduced as the sole accent color. This hue is used sparingly for interactive cues, success states, and subtle highlights. A mid-tone gray (#969696) serves as the bridge for secondary information and borders, ensuring a harmonious transition between light and dark surfaces.

## Typography

This design system employs a dual-sans-serif pairing to maximize both impact and readability. **Inter** is utilized for headings and interface labels, providing a systematic, clean look that scales beautifully from large display text to tiny button labels. Headlines should utilize tighter letter spacing and heavy weights to create a "strong" visual anchor.

**Manrope** is selected for body copy due to its slightly warmer, more open character compared to Inter. This ensures that long-form case studies or founder notes remain highly legible and approachable. All typography follows a strict vertical rhythm based on a 4px baseline, prioritizing generous line heights to enhance the feeling of "breathable" space.

## Layout & Spacing

The layout philosophy follows a **Fixed-Fluid Hybrid** model. Content is housed within a 12-column grid with a maximum width of 1280px to maintain readability on large displays. A generous margin of 40px on mobile and tablet prevents content from feeling cramped.

The spacing rhythm is built on an 8px base unit. To achieve the "premium studio" vibe, horizontal and vertical gaps are intentionally oversized. Section gaps are set to 120px to clearly demarcate different projects or thoughts, allowing the user's eye to rest. Internal component spacing (padding) should favor a "roomy" feel, typically using 24px or 32px increments.

## Elevation & Depth

Depth in this design system is achieved through **Tonal Layering** supplemented by ultra-soft ambient shadows. Surfaces do not "float" aggressively; instead, they sit just above the background to create a subtle hierarchy.

1.  **Level 0 (Base):** The primary background color (#FFFFFF or #F9F9F9).
2.  **Level 1 (Cards/Containers):** Pure white backgrounds with a 1px border in #969696 at 15% opacity.
3.  **Shadows:** When used, shadows should be extremely diffused (Blur: 30px-50px) with very low opacity (3-5%) using a charcoal tint rather than pure black. This creates a "soft glow" rather than a hard drop shadow, emphasizing the premium nature of the components.

## Shapes

The shape language is defined by **Soft Geometric Precision**. Standard UI elements like buttons and input fields utilize an 8px (0.5rem) corner radius. For larger containers and cards, the radius increases to 16px (1rem) to maintain visual proportion.

This moderate roundedness strikes a balance between the "sharpness" of corporate architecture and the "bubbliness" of consumer apps. It feels intentional and refined. Image containers should always match the container radius they sit within, creating nested harmony.

## Components

### Buttons
Buttons are the primary interaction point and should feel substantial.
- **Primary:** Solid black background with white text, 8px radius, bold Inter type.
- **Secondary:** Transparent background with a 1px #969696 border.
- **Tertiary (Ghost):** No border or background; uses the Sage Green accent for text.

### Cards
Cards are the workhorse for portfolio items. They use a Level 1 elevation (subtle border) and should have a 16px corner radius. Image-to-content ratio should be roughly 2:1 to prioritize visual work.

### Input Fields
Inputs are minimalist, utilizing a bottom-border only or a very light 4-sided stroke. On focus, the border transitions to the Sage Green accent with a subtle outer glow.

### Chips & Tags
Used for project categories (e.g., "Product Design," "SaaS"). These should be small, all-caps, and use the `label-sm` typography style with a light gray background and no border.

### Navigation
The header should be "sticky" but utilize a backdrop-blur (Glassmorphism) effect to allow the content beneath to bleed through slightly, maintaining a sense of continuity as the user scrolls through the portfolio.