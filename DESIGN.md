# Seniors Business Connect (SBC) - Design & Implementation Guide

This document outlines the architecture, design system, and component structure for the Seniors Business Connect website. It serves as a comprehensive reference for future agents or developers working on the repository.

## 1. Technical Stack
- **Framework:** React 19 (via Vite)
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion (for layout transitions, staggering, floating elements, and deck-shuffle animations)
- **Icons:** Lucide React (feather-style icons)

## 2. Typography
- **Primary Font:** `Plus Jakarta Sans` (Sans-serif)
  - Used globally across the entire website for headings, body text, and UI elements.
  - Previous iterations utilized monospace or serif fonts, but those have been completely removed to unify the design under a crisp, readable sans-serif system.

## 3. Color Palette
The site primarily utilizes a bright blue for highlights and a stark dark navy for foundations, contrasted against white and off-white backgrounds.

### Core Brand Colors
- **SBC Dark Blue (`#1B2D4F`)**
  - Used for large solid backgrounds (e.g., "How It Works", Newsletter Card) and primary text on light backgrounds.
- **SBC Bright Blue (`#4DA8DA`)**
  - Used for high-visibility highlights, buttons, icon backgrounds, glowing decorative elements.
- **SBC Blue (Original Variable)**
  - Often used as a mid-tone blue across the application, usually `#1976D2`.
- **SBC Gray (`sbc-gray-*`)**
  - Ranging from `sbc-gray-50` (near white) to `sbc-gray-900` (near black), used for subtle borders, secondary text, and the Footer.
- **Backgrounds:**
  - Crisp White (`#FFFFFF`) or `sbc-off-white` (`#F8FAFC`).

_Note: If editing colors on the fly via tailwind inline classes, typically use `bg-[#1B2D4F]` for deep elements and `bg-[#4DA8DA]` for bright elements where variables might fall short._

## 4. Component Architecture

All components live in `/src/components/`, while static data lives in `/src/data/members.js`.

### `Navbar.jsx`
- **Design:** A sticky, glassy, semi-transparent pill that sits permanently at the top of the browser window (`bg-white/90 backdrop-blur-xl shadow-sm`). 
- **Features:** It does *not* wait for scroll to become visible. Features a smooth-scrolling internal hash-link navigation system. 
- **Removed Elements:** The "Join Us" button was removed from the top navigation to streamline CTAs.

### `Hero.jsx`
- **Visuals:** Features two heavily glowing, blurred orbs in the background (`#4DA8DA` and `sbc-blue`) over a very faint dot grid.
- **Left Column:** A large hero text focusing on "Metro Vancouver and the Fraser Valley" and an emphasized "Browse Directory" CTA button (the secondary "Become a member" button was intentionally removed).
- **Right Column (The Deck):** An `AnimatePresence` stack of 3 overlapping white cards, tilted slightly.
  - **Animation Details:** The deck shuffles using Framer Motion. Every 3.5 seconds, the top card slides out left-and-down, making room for the other two cards to lift up and scale forward, while a new randomized member card cycles into the back of the deck.

### `Features.jsx`
- **Top Half:** A grid of distinct value propositions.
- **Bottom Half ("Community Updates"):** Features a dark blue background (`#1B2D4F`) with bright highlights (`#4DA8DA`).
- **ProfessionalShuffler Sub-component:** An endless horizontally panning row of custom business pill-cards (e.g., Financial Planning, Senior Living: "Independent & assisted living residences", Health & Wellness, Home Services, Legal Services, Real Estate: "Seniors Real Estate Specialists", Community Support).

### `MemberDirectory.jsx`
- **Structure:** The core functionality of the website. Reads from an imported `members.js` array.
- **Category Filter Order:** 
  1. All
  2. Senior Living & Care
  3. Health & Wellness
  4. Home Services
  5. Financial Services
  6. Real Estate
  7. Legal Services
  8. Community Organizations
  _Note: "Specialty Services" was removed entirely from the filtering system. Any members previously under this tag were ported to Home Services or Health & Wellness in `members.js`._
- **Interaction:** Utilizes Framer Motion's `layout` and `<AnimatePresence>` to smoothly pop elements in and out of the grid as categories are clicked.

### `About.jsx` & `HowItWorks.jsx`
- **About:** Details the core mission with high-fidelity typography. Mentions "Metro Vancouver and the Fraser Valley".
- **HowItWorks:** Features a robust timeline/step-by-step UI against a dark blue (`#1B2D4F`) layout.

### `JoinUs.jsx`
- **Design:** Completely redesigned away from a simple section into two distinct, separated white/blue cards layered over an `sbc-off-white` background.
  1. **Newsletter Card:** A large, dark blue (`#1B2D4F`) box capturing emails with a bright blue (`#4DA8DA`) "Subscribe" button.
  2. **Professional CTA:** A thinner white card asking professionals if they want to join, linking to `mailto:info@seniorsbc.com?subject=Membership Application` via a dark blue (#1B2D4F) "Learn More" button.
  3. **General Inquiry Card:** A white card linking to `mailto:info@seniorsbc.com` via a dark blue "Email Us" button.

### `Footer.jsx`
- **Layout:** 4 columns encompassing Brand/Geography, Quick Links, Contact & Socials, and Affiliations.
- **Geography Details:** Stated explicitly as "Metro Vancouver & the Fraser Valley, BC" next to a Map Pin icon (no longer strictly "Fraser South").
- **Socials:** A custom pill-shaped Facebook button (`w-fit`), bearing the "F" icon and the text "Facebook Group", linking to the official SBC group.
- **Affiliations:** Specifically mentions and links to the "BC Association of Community Response Networks" (`https://bccrns.ca`).

## 5. Development Principles for Future Agents
1. **Never use `font-mono` or `font-serif`** unless specifically requested in a new context. This application strives for strict adherence to a unified sans-serif typographic scale.
2. **Prioritize the Dark/Bright Blue duality.** If a component feels disconnected or disjointed, check if using `#1B2D4F` as the background and `#4DA8DA` as the CTA color fixes the aesthetic. 
3. **Location Terminology.** Always refer to the region as "Metro Vancouver and the Fraser Valley, BC" rather than "Fraser South", which was historically used but fully deprecated.
4. **Hero Animations are delicate.** The Deck Shuffler in `Hero.jsx` relies heavily on strict array indexing and Framer Motion's `<AnimatePresence mode="popLayout">`. Modify with extreme caution to avoid layout snap-backs. 
