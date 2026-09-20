# The Hyperspace Project — Web Ecosystem

A web-first THP launcher/dashboard containing:

- Games: Factory Panic, Crossfall, RIFT
- Project: Lumina
- Shared THP account/session layer
- Firebase-ready launcher integration
- Modular CSS + JS assets
- Per-character, per-machine, per-model and per-weapon asset modules
- GitHub Pages-compatible static hosting

## Firebase

The Firebase Web App configuration from the original THP / Hyperspace Dashboard is already included in `shared/js/firebase-config.js`.

It points to the existing `hyperspace-r` Firebase project. Do not replace the existing Firebase project. This repo is designed to use the same RTDB/Firestore infrastructure and the rules supplied with the project.

## GitHub Pages

This is a static web project. Publish the repository root with GitHub Pages.

## Local testing

Any static HTTP server works. For example:

`python -m http.server 8000`

Then open:

`http://localhost:8000/`
