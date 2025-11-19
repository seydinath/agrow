# AgroWomanEcology
![CI](https://github.com/seydinath/agrow/actions/workflows/ci.yml/badge.svg)

## Déploiement sur Vercel

- Prérequis: projet lié à Vercel (Import GitHub → repo `seydinath/agrow`).
- Vercel détecte Next.js automatiquement; pnpm est pris en charge via `packageManager`.

Paramètres recommandés dans Vercel → Settings → General/Build:

- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`
- Node Version: `20`

Variables d’environnement (Settings → Environment Variables):

- `NEXT_PUBLIC_APP_URL`: URL publique du site (ex: `https://www.agrowomanecology.sn`).
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`: clé publique EmailJS.
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`: ID du service EmailJS.
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`: ID du template EmailJS.
- `NEXT_PUBLIC_CONTACT_TO`: email destinataire (ex: `agrowomanecology@gmail.com`).

Déploiement:

1. Pousser sur `main` ou créer une PR → un Preview est généré.
2. Vérifier la page d’aperçu Vercel; tester le formulaire de contact.
3. Promouvoir en Production via Vercel si tout est OK.

Notes:

- Les routes `app/robots.ts` et `app/sitemap.ts` utilisent `NEXT_PUBLIC_APP_URL` pour générer les liens.
- Le formulaire de contact dépend de EmailJS et des `NEXT_PUBLIC_*` ci-dessus.

## Déploiement automatique (Deploy Hook)

- Le workflow GitHub Actions `Deploy (Vercel Hook)` déclenche un déploiement Vercel en Production après la réussite de `CI` sur la branche `main`.
- Préparer le hook:
	1. Vercel → Project Settings → Git → Deploy Hooks → Create Hook
	2. Sélectionner la branche `main` et copier l’URL du hook
	3. Dans GitHub → Settings → Secrets and variables → Actions → New repository secret
	4. Nom: `VERCEL_DEPLOY_HOOK_URL` • Valeur: l’URL copiée
- Déclenchement: merge/push sur `main` → CI passe → le hook est POSTé → Vercel déploie.
- Déclenchement manuel: onglet Actions → `Deploy (Vercel Hook)` → Run workflow.

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
