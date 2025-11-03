# Changelog

Toutes les modifications récentes locales (non poussées)

## Unreleased
- Fix: Empêcher le scroll horizontal global (`app/globals.css`) et limiter la largeur du contenu (`app/layout.tsx`).
- Fix: Réduction de l'espacement du footer et masquage des images décoratives (`components/footer.tsx`).
- Feat: Remplacement de l'image hero par `next/image` pour optimisation responsive (`app/page.tsx`).
- Chore: Ajout et configuration d'ESLint (flat config) et Prettier; installation de `eslint-plugin-unused-imports` et nettoyage des imports inutilisés.
- Chore: Ajout `turbopack.root` dans `next.config.mjs` pour corriger l'avertissement de workspace root.
- Chore: Ajout d'un job CI minimal (`.github/workflows/ci.yml`) et création d'un `README.md`.
- Chore: Ajout d'un lien "skip to content" pour l'accessibilité dans `app/layout.tsx`.

