# Parallax Effect Hero Page

A multi-layer parallax hero page built with pure HTML, CSS & JavaScript — no frameworks, no build tools.

## Features

- Scroll-driven depth animation across 5 stacked layers
- Smooth mouse-tracking parallax with damped inertia
- Floating petal animation (CSS keyframes)
- Fixed background with moving foreground elements
- Dark content section with ambient glows and grid pattern
- Glassmorphism UI elements and gold accent design
- Fully responsive

## Layers

| Layer | Behaviour |
|---|---|
| Background | Fixed — never moves |
| Torii Gate | Gently drifts down on scroll |
| Top-left tree | Slowly floats up on scroll |
| Bottom-right tree | Slowly floats down on scroll |
| Petals | Moves fast with mouse + scroll |

## Stack

- HTML5
- CSS3 (custom properties, keyframes, clamp)
- Vanilla JavaScript (requestAnimationFrame, IntersectionObserver)

## Run locally

Just open `index.html` in your browser — or serve with any static server:

```bash
python -m http.server 8080
```
