# Portfolio — Idriss Ouchaghoui

Portfolio personnel statique construit avec HTML5, CSS3 et JavaScript vanilla. Il est conçu pour être déployé directement sur GitHub Pages, sans installation ni dépendance.

## Direction visuelle

- **Identité** : ingénierie logicielle et IA, avec une interface lumineuse, précise et éditoriale.
- **Palette** : blanc cassé `#f8fafc`, surfaces blanches, texte ardoise `#0f172a`, bleu principal `#2563eb`, indigo et accent ambre discret.
- **UX** : le Hero présente immédiatement le profil et la recherche de stage PFA. Les projets constituent la preuve principale, puis le parcours, les activités et un contact direct.
- **Typographie** : Manrope pour les titres et Inter pour la lecture, chargées depuis Google Fonts. Pour un fonctionnement totalement hors ligne, les polices peuvent être remplacées par des fichiers locaux.

## Structure

```text
portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile/
    └── projects/
```

## Mise en ligne avec GitHub Pages

### 1. Créer le repository

1. Connectez-vous à GitHub.
2. Cliquez sur **New repository**.
3. Donnez-lui un nom, par exemple `portfolio-idriss-ouchaghoui`.
4. Choisissez `Public` si le portfolio doit être visible par les recruteurs.
5. Créez le repository sans ajouter de README afin d'éviter un conflit avec le fichier local.

### 2. Ajouter les fichiers

Depuis le dossier qui contient `portfolio`, ouvrez un terminal PowerShell et exécutez :

```powershell
cd .\portfolio
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/VOTRE-PSEUDO/portfolio-idriss-ouchaghoui.git
git push -u origin main
```

Remplacez `VOTRE-PSEUDO` par votre identifiant GitHub réel. Vous pouvez aussi créer le repository via l'interface GitHub et téléverser les fichiers manuellement.

### 3. Activer GitHub Pages

1. Ouvrez le repository sur GitHub.
2. Allez dans **Settings > Pages**.
3. Dans **Build and deployment**, sélectionnez **Deploy from a branch**.
4. Sélectionnez la branche `main` et le dossier `/ (root)`.
5. Cliquez sur **Save**.

### 4. Obtenir l'URL

Après quelques instants, GitHub affichera l'adresse dans **Settings > Pages**. Elle aura généralement cette forme :

```text
https://VOTRE-PSEUDO.github.io/portfolio-idriss-ouchaghoui/
```

Le nom exact dépend du pseudo et du nom du repository. Aucun lien n'est inventé dans le portfolio lui-même.

## Personnalisation obligatoire avant partage

### Liens GitHub et LinkedIn

Dans `index.html`, remplacez les éléments `placeholder-link` par de vrais liens quand vous les aurez. Recherchez les mentions `à renseigner` et `URL ... à ajouter`.

Exemple :

```html
<a href="https://github.com/VOTRE-PSEUDO" target="_blank" rel="noreferrer">GitHub</a>
```

Ajoutez de la même manière votre URL LinkedIn. Ne laissez pas un lien fictif en production.

### CV

Ajoutez votre fichier réel dans `assets/profile/` avec le nom :

```text
CV-Idriss-Ouchaghoui.pdf
```

Le bouton est actuellement protégé par un message placeholder tant que le fichier n'est pas fourni.

### Images des projets

Ajoutez les images réelles dans `assets/projects/`, puis remplacez les visuels CSS des classes `visual-neural`, `visual-graph`, `visual-task` et `visual-campus` par des éléments `<img>` avec un attribut `alt` descriptif. Les visuels actuels sont des compositions graphiques temporaires clairement identifiées par le contenu du projet.

Pour l'image Open Graph, ajoutez une image réelle dans `assets/profile/og-image-placeholder.png` ou modifiez la valeur `og:image` dans `index.html`.

### Informations à compléter

Les langues, les détails techniques de TaskMe et de la Plateforme Étudiants, ainsi que les métriques du projet GNN sont volontairement indiqués comme `À préciser`. Complétez uniquement avec des informations vérifiables.

## Tester localement

Le site fonctionne en ouvrant `index.html` dans un navigateur. Pour une URL locale plus proche de GitHub Pages, utilisez par exemple l'extension VS Code **Live Server**, puis ouvrez la page avec son bouton **Go Live**.

Aucune étape de build n'est nécessaire.
