# Portfolio de Gaëtan Tiazara

Application web statique en français, construite avec Vite et TypeScript, sans framework ni serveur applicatif. Contenus adaptés du [portfolio original](https://gtiazara.gitlab.io/portfolio/portfolio/).

## Développement

Prérequis : Node.js 22 LTS et npm. Le projet fonctionne également avec Node.js 22.3 utilisé lors de sa création.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
```

La compilation vérifie les types TypeScript et génère le site dans `dist/`.

## Publication sur GitHub Pages

1. Publier le projet dans un dépôt GitHub, sur la branche `main` ou `master`.
2. Dans **Settings > Pages > Build and deployment**, sélectionner **GitHub Actions** comme source.
3. Pousser les changements, ou lancer manuellement **Deploy portfolio to GitHub Pages** depuis l’onglet **Actions**.
4. L’URL publiée apparaît dans l’environnement `github-pages` et dans les paramètres Pages du dépôt.

Le workflow installe les dépendances avec `npm ci`, compile puis déploie uniquement `dist/`. Aucun secret personnel ni jeton à ajouter. Le déploiement effectif nécessite un dépôt GitHub et GitHub Pages activé ; aucun dépôt n’est créé ni publié automatiquement par ce projet.

La configuration `base: './'` et les liens de navigation par ancres permettent d’héberger le site à la racine (`GTiazara.github.io`) ou dans un sous-répertoire (`GTiazara.github.io/nom-du-depot/`), sans changer le code. Il n’y a pas de routage serveur à configurer.

## Personnalisation

- `src/catalog.ts` : les 11 projets du dépôt source et l’ajout Cartographie de Mars.
- `src/main.ts` : présentation, formation, compétences, adresse e-mail et réseaux sociaux.
- `src/portfolio.css` : styles, couleurs, typographie et adaptations mobiles.
- `public/images/` : images locales des projets, reprises de `portfolio-main/src/assets/images/projects/`.
- `public/files/` : CV français et anglais fournis avec le dépôt source.
- `index.html` : titre et métadonnées pour les moteurs de recherche et le partage.

Les projets proposent des filtres par domaine et une fiche détaillée accessible au clavier. Le menu s’adapte aux petits écrans ; les animations respectent la préférence de réduction des mouvements.

## Sources et médias

Le catalogue présente 12 projets, dont **GDAI**, une application interne de gestion du matériel. Les informations publiées sur ce projet restent générales ; aucun lien vers ses ressources internes n’est fourni.

Les visuels des projets et les CV français et anglais sont stockés dans `public/` pour être servis localement par GitHub Pages. Le GIF source de billetterie (environ 88 Mo) est représenté par une image WebP extraite de sa séquence de réservation ; les GIF MiniGIS et OpenGL restent animés.

Les CV sont disponibles dans `public/files/cv-fr.pdf` et `public/files/cv-en.pdf`, consultables dans la visionneuse intégrée ou téléchargeables. L’adresse de contact est `gaetan.tiazara@outlook.fr`. Les polices Manrope et DM Sans sont chargées depuis Google Fonts avec une police de secours ; les icônes Lucide sont incluses dans le build. Aucun traceur, formulaire serveur ni collecte de données n’est ajouté.
