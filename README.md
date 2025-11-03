# AgroWomanEcology

Développement local & commandes utiles

Pré-requis
- Node.js LTS
- pnpm (recommandé)

Installation

```powershell
cd C:\Users\md\Desktop\agrowoman
pnpm install
```

Démarrer en développement

```powershell
pnpm dev
# ou forcer un port différent
$env:PORT=3002; pnpm dev
```

Build pour production

```powershell
pnpm build
pnpm start
```

Lint & types

```powershell
pnpm lint
```

Notes
- Le projet utilise Next.js, Tailwind CSS et pnpm.
- Si Next.js affiche un avertissement sur le workspace root, il est réglé via `turbopack.root` dans `next.config.mjs`.
- Si tu veux forcer l'utilisation de npm au lieu de pnpm, remplace `pnpm` par `npm` dans les commandes ci-dessus.
