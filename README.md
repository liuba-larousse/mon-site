# Site vitrine + blog (FR) — Astro

Ce projet génère un site rapide (SEO-friendly) avec pages marketing + blog Markdown + CTA “Réserver un appel” et “WhatsApp”.

## Démarrer

1) Installer les dépendances

```bash
npm install
```

2) Lancer en local

```bash
npm run dev
```

## À configurer

- **Marque + CTA** : `src/site.config.ts`
- **URL du site (SEO)** : variable d’environnement `PUBLIC_SITE` (ex: `https://votredomaine.fr`)

Exemple :

```bash
PUBLIC_SITE="https://votredomaine.fr" npm run build
```

## Blog

Ajoutez des articles dans `src/content/blog/*.md` (frontmatter requis).

