# Contributing to Parallax Effect Hero Page

Thanks for your interest in improving this project! It's a small, framework-free parallax demo, so contributions are meant to stay lightweight and dependency-free too.

## Ground Rules

- **No frameworks or libraries.** This project is pure HTML, CSS, and vanilla JavaScript on purpose. Please don't introduce jQuery, GSAP, React, build tools, or npm dependencies in a PR — if you think one is genuinely needed, open an issue to discuss it first.
- **Keep it performant.** Any scroll or mouse-move handler should use `requestAnimationFrame` (and `IntersectionObserver` where relevant) rather than firing expensive work on every raw event.
- **Respect `prefers-reduced-motion`.** If you touch the animation code, make sure users who have reduced-motion enabled still get a usable, non-jarring page.

## Getting Started

1. Fork the repo and clone your fork locally.
2. Serve the project with any static server, e.g.:
   ```
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` and confirm the hero loads with the parallax layers intact.

## Project Structure

| File | Purpose |
| :--- | :--- |
| `index.html` | Page markup and layer structure |
| `styles.css` | Layout, custom properties, keyframe animations |
| `script.js` | Scroll/mouse parallax logic |
| `assets/` | Images used by the layered scene |

## How to Contribute

### Reporting Bugs
Open an issue with:
- Browser + OS you tested on
- Steps to reproduce
- What you expected vs. what happened
- A screenshot or screen recording if it's a visual/animation bug (these are hard to describe in words)

### Suggesting Enhancements
Open an issue describing the idea and why it fits the project's scope (pure HTML/CSS/JS, hero-page focused). Please check open issues first to avoid duplicates.

### Submitting Changes
1. Create a branch from `main`: `git checkout -b fix/short-description`
2. Make your changes, keeping commits focused and messages descriptive.
3. Test in at least one desktop browser and one mobile viewport (or dev tools' responsive mode).
4. Update the README if your change affects setup, features, or the layer behavior table.
5. Open a pull request describing what changed and why. Link any related issue.

### Code Style
- 2-space indentation.
- Prefer CSS custom properties over hard-coded repeated values.
- Comment any non-obvious math in `script.js` (parallax offset calculations, easing, etc.) — this is the part future contributors are most likely to get lost in.
- Keep asset file sizes reasonable; compress images before committing them to `assets/`.

## Code of Conduct

Be respectful and constructive in issues and reviews. Disagreements about implementation are fine — personal attacks aren't.

## Questions?

Open an issue with the `question` label if anything here is unclear.
