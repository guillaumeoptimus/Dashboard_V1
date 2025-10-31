# Optimus Lead — Site d'offres + App (Dashboard)

**Inclus :**
- Site vitrine (Landing + Offres + Détail d’offres + Contact)
- Page **Créer un compte** (email) ⇒ accès Dashboard
- App (Dashboard + CRM Kanban + Clients), protégée par middleware (auth légère)

## Lancer
```bash
npm i
npm run dev
```

## Déployer (Vercel)
- Nouveau projet → preset Next.js auto → aucun override → déployer.

## Arborescence
- `/` : Landing (site offres)
- `/offres` + `/offres/[slug]` : Détails des offres
- `/contact` : Contact
- `/app-connexion` : Création de compte (email)
- `/dashboard`, `/crm/kanban`, `/clients` : App
