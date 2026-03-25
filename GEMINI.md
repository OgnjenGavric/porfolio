# Gemini Project Context: Olja Portfolio Website

This project is a personal portfolio website for Ognjen (Olja) Gavrić, a Front-End Developer. It showcases projects, skills, and professional experience through two distinct design iterations.

## Project Overview

- **Primary Technologies:** HTML5, CSS3 (Vanilla), JavaScript (Vanilla).
- **Key Libraries:** 
  - [NES.css](https://nostalgic-css.github.io/NES.css/) (Legacy 8-bit version)
  - [Swiper.js](https://swiperjs.com/) (New version carousel)
  - [ScrollReveal](https://scrollrevealjs.org/) (Animations)
  - [Remix Icon](https://remixicon.com/) (Iconography)
  - [EmailJS](https://www.emailjs.com/) / [Formspree](https://formspree.io/) (Contact form integration)
- **Architecture:** 
  - The project is a static multi-page website (though primarily two main single-page experiences).
  - **Legacy Version:** Located in the root directory (`index.html`). Uses an 8-bit retro aesthetic.
  - **New Version:** Located in the `new/` directory (`new/new-index.html`). Uses a modern, sleek professional design.

## Directory Structure

- `assets/`: Global assets and legacy version resources (CSS, JS, Images, PDFs, Certificates).
- `new/`: The modern version of the portfolio, including its own `assets/` subdirectory.
- `8bit-website.html`, `BMI-calculator.html`: Standalone utility pages or previous project experiments.
- `assets/pdf/`: Contains professional CVs and recommendation letters.
- `assets/img/`: Project screenshots and personal branding images.

## Building and Running

Since this is a static website, there is no build step required.

- **Development:** Open `index.html` or `new/new-index.html` directly in a browser or use a simple local server (e.g., VS Code Live Server, `python -m http.server`).
- **Testing:** Manually verify responsiveness and interactive elements (tabs, modals, swipers) in the browser.
- **Deployment:** The project is ready for static hosting (e.g., GitHub Pages, Netlify, Vercel).

## Development Conventions

- **Vanilla Focus:** Prefer Vanilla JavaScript and CSS for modifications to maintain consistency with the existing codebase.
- **Version Separation:** 
  - Changes to the 8-bit style should be made in `index.html` and `assets/css/styles.css`.
  - Changes to the modern style should be made in `new/new-index.html` and `new/assets/css/style.css`.
- **Responsive Design:** Both versions use mobile-first or highly responsive layouts. Ensure any new sections maintain this compatibility.
- **Theme Management:** Both versions implement a Dark/Light theme toggle using `localStorage` to persist user preference.
