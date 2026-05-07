---
name: Academic Precision
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#444748'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#747878'
  outline-variant: '#c4c7c8'
  surface-tint: '#5d5f5f'
  primary: '#5d5f5f'
  on-primary: '#ffffff'
  primary-container: '#ffffff'
  on-primary-container: '#747676'
  inverse-primary: '#c6c6c7'
  secondary: '#5c5f60'
  on-secondary: '#ffffff'
  secondary-container: '#e1e3e4'
  on-secondary-container: '#626566'
  tertiary: '#5d5f5f'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffffff'
  on-tertiary-container: '#747676'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e1e3e4'
  secondary-fixed-dim: '#c5c7c8'
  on-secondary-fixed: '#191c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9ff'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
typography:
  h1:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h3:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 0.5rem
  sm: 1rem
  md: 1.5rem
  lg: 2.5rem
  xl: 4rem
  container-max: 1280px
  gutter: 1.5rem
---

## Brand & Style

This design system embodies a sophisticated, academic atmosphere tailored for high-end SaaS learning environments. The brand personality is authoritative yet unobtrusive, prioritizing content clarity and student focus over visual noise. 

The style is rooted in **Minimalism**, utilizing a restricted palette where the white primary color acts as a canvas for the deep red accent. The aesthetic is defined by expansive whitespace, precision-engineered typography, and a card-based architecture that organizes complex educational data into digestible modules. The goal is to evoke a sense of calm, intellectual rigor, and premium digital craftsmanship.

## Colors

The palette is anchored by a pure white base to ensure maximum legibility and a feeling of openness. The deep red accent is reserved for primary actions, progress indicators, and critical branding elements, providing a dignified contrast that commands attention without causing visual fatigue.

- **Primary Canvas:** #FFFFFF (Used for backgrounds and card surfaces).
- **Subtle Surface:** #F9FAFB (Used for app backgrounds to differentiate from cards).
- **Deep Red Accent:** #981C00 (Used for primary buttons, active states, and focus elements).
- **Deep Red Hover:** #7A1600 (A weighted shift for interactive feedback).
- **Ink:** #111827 (The primary text color, ensuring high-contrast readability).

## Typography

This design system utilizes a dual-font strategy to balance character with utility. **Manrope** is used for headlines to provide a modern, refined, and balanced feel. Its geometric tendencies complement the rounded UI components perfectly.

**Inter** is employed for all body copy and interface labels. Chosen for its systematic and functional nature, it ensures that instructional content remains readable across all device sizes. Large line heights are strictly enforced to facilitate long-form reading common in LMS platforms.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for centralized content areas, ensuring that learning materials are presented within a controlled visual field. A 12-column grid is used with generous gutters to maintain the minimalist aesthetic.

Spacing is intentionally "large." We avoid information density in favor of focus. Sections are separated by `xl` spacing, while internal card components utilize `md` padding. This "breathable" rhythm reduces cognitive load for students and instructors alike.

## Elevation & Depth

Hierarchy is established through **Ambient Shadows** and tonal separation. Surfaces utilize a soft, diffused shadow (`shadow-md`) to appear slightly elevated above the neutral app background. 

Shadows should be low-opacity and neutral, avoiding heavy blacks. When a user interacts with a card, the shadow should subtly expand to simulate physical lifting. This design system avoids harsh borders, preferring to let shadows and subtle value shifts in background colors define the spatial relationship between elements.

## Shapes

The shape language is defined by the **Rounded-2xl** standard. This significant corner radius (1.5rem for large components) softens the overall interface, making the platform feel approachable and modern.

Smaller elements like buttons and input fields follow the `rounded-lg` (1rem) or `rounded-xl` (1.5rem) scale to maintain visual harmony with the larger card containers. This consistency in curvature creates a cohesive, "friendly-premium" aesthetic.

## Components

### Buttons & Inputs
Inspired by shadcn/ui, buttons utilize a solid fill for primary actions and a ghost or outlined style for secondary ones. 
- **Primary Button:** Solid #981C00 with white text. 
- **Hover State:** Scale to 102%, background shifts to #7A1600, transition duration 200ms.
- **Inputs:** White background, 1px border (#E5E7EB), focus state uses a 2px ring of the accent color.

### Cards
Cards are the primary structural unit. They must feature `rounded-2xl`, `shadow-md`, and a white background. Padding within cards should never be less than `1.5rem`.

### Chips & Badges
Used for course categories or status (e.g., "In Progress"). These should have a subtle tint of the accent color (low opacity) with the deep red text to maintain hierarchy without competing with primary buttons.

### Additional Components
- **Progress Bars:** Thin, 8px height, utilizing the deep red accent against a light grey track.
- **Course Nav:** Vertical sidebar with generous vertical padding between navigation links, using weight shifts (Semibold) for active states rather than heavy background fills.