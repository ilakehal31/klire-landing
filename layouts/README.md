# Layout Legal - Documentation

Layout réutilisable pour les pages de documents légaux (politique de confidentialité, mentions légales, CGU, etc.)

## Utilisation

### 1. Structure de base

```vue
<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <!-- Votre contenu ici -->
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = 'Titre de votre document'

const toc = [
  { id: 'section-1', label: '1. Première section' },
  { id: 'section-2', label: '2. Deuxième section' },
  // ...
]
</script>
```

### 2. Props du layout

- `title` (string, requis) : Titre principal du document
- `tableOfContents` (array, requis) : Sommaire avec `id` et `label`
- `siteName` (string, optionnel) : Nom du site (défaut: "klyre.io")
- `lastUpdated` (string, optionnel) : Date de mise à jour (défaut: "Mars 2026")

### 3. Composants disponibles

#### LegalSection
Section principale avec titre et ancre

```vue
<LegalSection id="mon-id" title="1. Mon titre">
  <p>Contenu de la section...</p>
</LegalSection>
```

Props:
- `id` (string, requis) : ID pour l'ancre de navigation
- `title` (string, requis) : Titre de la section
- `subsection` (string, optionnel) : Sous-titre

#### LegalInfoBox
Boîte d'information avec fond coloré

```vue
<LegalInfoBox title="Titre optionnel" :highlight="true">
  <p>Contenu de la boîte...</p>
</LegalInfoBox>
```

Props:
- `title` (string, optionnel) : Titre de la boîte
- `highlight` (boolean, optionnel) : Utilise la couleur orange si `true`, gris sinon

#### LegalList
Liste à puces avec style personnalisé

```vue
<LegalList :items="['Item 1', 'Item 2', 'Item 3']" />
```

Props:
- `items` (string[], requis) : Liste des éléments à afficher

## Exemples complets

Trois exemples complets sont disponibles :
- `/pages/legal/privacy.vue` - Politique de confidentialité
- `/pages/legal/terms.vue` - Mentions légales
- `/pages/legal/cgu.vue` - Conditions générales d'utilisation

### Créer une nouvelle page légale

1. Créer un fichier dans `/pages/legal/`
2. Utiliser le layout `legal` avec les props nécessaires
3. Structurer le contenu avec les composants `LegalSection`, `LegalInfoBox`, `LegalList`

```vue
<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <LegalSection id="section-1" title="1. Titre de section">
      <p>Votre contenu...</p>
      
      <LegalInfoBox title="Information importante" :highlight="true">
        <p>Contenu mis en évidence</p>
      </LegalInfoBox>
      
      <LegalList :items="['Item 1', 'Item 2']" />
    </LegalSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = 'Mon Document'
const toc = [
  { id: 'section-1', label: '1. Titre de section' }
]

useHead({
  title: `${pageTitle} - Klyre`,
  meta: [{ name: 'description', content: 'Description...' }]
})
</script>
```

## Style

Le layout utilise:
- Tailwind CSS pour le styling
- Nuxt UI pour les icônes
- Couleur principale: Orange (#f97316)
- Police: System font stack
- Responsive: Mobile-first avec sidebar qui se transforme en navigation mobile

## Features

- ✅ Navigation automatique dans le sommaire
- ✅ Scroll spy pour mettre en surbrillance la section active
- ✅ Responsive (sidebar fixe sur desktop, navigation en haut sur mobile)
- ✅ Lien "Retour à l'accueil" en haut de page
- ✅ Ancres de navigation pour chaque section
- ✅ Style cohérent avec les captures d'écran fournies
