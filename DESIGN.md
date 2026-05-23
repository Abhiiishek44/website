# Design System Specification: Atmospheric Precision

## 1. Overview & Creative North Star
This design system is built upon the "Atmospheric Precision" North Star. It rejects the clinical coldness of traditional high-tech interfaces in favor of a sophisticated, editorial-driven experience. We take the high-density, tool-based utility of modern IDEs—specifically the clean, modular layout language seen in Cursor—and wrap it in a tonal, layered environment.

The system breaks away from "template" layouts by utilizing intentional asymmetry and breathing room. We treat the digital interface as a curated workspace where high-contrast typography scales and overlapping "glass" surfaces replace the rigid, flat grids of the past decade.

---

## 2. Colors & Surface Philosophy

The palette shifts away from standard blues and grays, opting for a rich, organic tech aesthetic.

### Core Palette
- **Primary (`#845c6c`)**: Use for key actions and brand presence.
- **Info/Deep Base (`#342936`)**: Our grounding neutral. Used for deep-toned surfaces and high-contrast text.
- **Success (`#5d9658`)**: High-tech green for positive states and completions.
- **Warning (`#da8620`)**: Amber/Ochre for alerts that require attention without alarm.
- **Danger (`#f44336`)**: Sharp red for critical errors.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or layout containment. Boundaries must be defined solely through background color shifts or tonal nesting. 
- *Sectioning:* Transition from `surface` to `surface-container-low` to define a new content area.
- *Nesting:* Place a `surface-container-lowest` card on a `surface-container-low` section to create natural definition.

### The Glass & Gradient Rule
To achieve the "Atmospheric" quality, use **Glassmorphism** for floating elements (Command Bars, Tooltips, Navigation).
- **Token:** Use semi-transparent `surface` colors (80% opacity) with a `20px` backdrop-blur.
- **Signature Textures:** For Hero backgrounds or primary CTAs, use a subtle linear gradient from `primary` (`#845c6c`) to `primary_container` (`#6a4554`) at a 135-degree angle. This adds a "soul" to the interface that flat fills cannot provide.

---

## 3. Typography: The Sharp Professional
We use a dual-font approach to balance technical precision with editorial authority.

*   **Display & Headlines (Manrope):** Geometric, sharp, and modern. These should be set with tight tracking (-2%) to feel "locked in" and professional.
*   **Body & Titles (Inter):** The industry standard for legibility. Provide generous line-height (1.6) for long-form content to ensure the interface feels "airy."

**Scale Highlight:**
- **Display-LG (3.5rem / Manrope):** Use sparingly for hero moments.
- **Headline-SM (1.5rem / Manrope):** The workhorse for section headers.
- **Body-MD (0.875rem / Inter):** The default for all functional interface text.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering** rather than traditional structural lines or heavy shadows.

- **The Layering Principle:** Treat the UI as stacked sheets of fine paper. 
    - *Background:* `surface` (`#fff7fb`)
    - *Content Well:* `surface-container-low` (`#ffeffd`)
    - *Interactive Component:* `surface-container-lowest` (`#ffffff`)
- **Ambient Shadows:** Shadows must be felt, not seen. Use extra-diffused blur values (24px - 48px) at 4-6% opacity. Use a tint of `on-surface` (`#221824`) for the shadow color to ensure it feels like a natural light occlusion rather than a gray smudge.
- **The Ghost Border:** If a boundary is required for accessibility in high-density data views, use the `outline_variant` at **15% opacity**. This creates a "suggestion" of a line that disappears into the background.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`), white text, `0.375rem` (md) corner radius. High-tech "sharpness."
- **Secondary:** Surface-tinted background (`secondary_container`) with `on_secondary_container` text. No border.
- **Tertiary:** Ghost style. No background, `primary` text. Use for low-priority actions.

### Floating Command Bar (Signature Component)
Inspired by modern AI tools, this is a floating container utilizing the **Glassmorphism** rule. 
- **Style:** `surface` at 85% opacity, 16px backdrop blur, 8px (lg) border radius, and an Ambient Shadow.
- **Usage:** Centralized input or global navigation.

### Input Fields
- **Default:** `surface-container-highest` background. No border.
- **Active State:** A subtle "Ghost Border" of `primary` at 20% opacity and a 2px vertical accent bar on the left side to indicate focus.
- **Typography:** Labels should use `label-md` in `on_surface_variant`.

### Cards & Lists
- **Rule:** Absolute prohibition of divider lines.
- **Separation:** Use `spacing-scale` (vertical white space) or subtle shifts between `surface-container-low` and `surface-container-high`.
- **Interactions:** On hover, a card should shift from `surface-container-low` to `surface-container-lowest` with a 4% Ambient Shadow.

---

## 6. Do's and Don'ts

### Do:
- **Do** embrace asymmetry. It’s okay to have a 60/40 split on a page to create an editorial feel.
- **Do** use the `primary_fixed` and `primary_fixed_dim` tones for subtle background highlights behind important text.
- **Do** ensure all "Glass" elements have a fallback solid color for users who prefer reduced transparency.

### Don't:
- **Don't** use 100% black (`#000000`) or 100% gray. Use the `on_surface` (`#221824`) for all dark text.
- **Don't** use standard 1px borders to separate list items. Use white space.
- **Don't** use sharp 90-degree corners for containers. Stick to the `md` (`0.375rem`) or `lg` (`0.5rem`) tokens to maintain the "Soft Minimalism" aesthetic.
- **Don't** clutter the view. If a screen feels full, increase the surface-to-surface tonal contrast instead of adding lines.