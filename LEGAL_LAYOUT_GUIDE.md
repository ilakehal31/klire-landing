# Guide d'utilisation du Layout Legal

Ce guide explique comment utiliser le système de layout pour les documents légaux dans le projet Klyre.

## 📁 Structure des fichiers

```
layouts/
  └── legal.vue              # Layout principal pour documents légaux

components/
  ├── LegalSection.vue       # Section avec titre et ancre
  ├── LegalInfoBox.vue       # Boîte d'information stylisée
  └── LegalList.vue          # Liste à puces personnalisée

composables/
  └── useLegalContent.ts     # Helpers pour le contenu légal

types/
  └── legal.ts               # Types TypeScript

pages/legal/
  ├── index.vue              # Page d'index listant tous les documents
  ├── privacy.vue            # Politique de confidentialité
  ├── terms.vue              # Mentions légales
  └── cgu.vue                # Conditions générales d'utilisation
```

## 🎨 Caractéristiques du design

- **Sidebar fixe** : Navigation par sommaire sur desktop
- **Scroll spy** : Section active mise en évidence automatiquement
- **Responsive** : Adapté mobile avec navigation en haut
- **Couleur principale** : Orange (primary-500) pour les accents
- **Typographie** : Font Archivo avec hiérarchie claire
- **Espacement** : Généreux pour une lecture confortable

## 🚀 Créer un nouveau document légal

### 1. Créer le fichier de page

Créez un nouveau fichier dans `/pages/legal/` :

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
  { id: 'section-2', label: '2. Deuxième section' }
]

useHead({
  title: `${pageTitle} - Klyre`,
  meta: [
    { name: 'description', content: 'Description pour le SEO' }
  ]
})
</script>
```

### 2. Structurer le contenu

#### Utiliser LegalSection

```vue
<LegalSection id="mon-id" title="1. Mon titre">
  <p>Contenu de la section...</p>
</LegalSection>
```

**Props :**
- `id` (string, requis) : ID unique pour l'ancre de navigation
- `title` (string, requis) : Titre de la section
- `subsection` (string, optionnel) : Sous-titre de section

#### Utiliser LegalInfoBox

Pour mettre en évidence des informations importantes :

```vue
<!-- Boîte standard (fond gris) -->
<LegalInfoBox title="Titre optionnel">
  <p>Contenu de la boîte...</p>
</LegalInfoBox>

<!-- Boîte mise en évidence (fond orange) -->
<LegalInfoBox title="Important" :highlight="true">
  <p>Information importante...</p>
</LegalInfoBox>
```

**Props :**
- `title` (string, optionnel) : Titre de la boîte
- `highlight` (boolean, optionnel) : Active le style orange si `true`

#### Utiliser LegalList

Pour des listes à puces stylisées :

```vue
<LegalList :items="[
  'Premier élément',
  'Deuxième élément',
  'Troisième élément'
]" />
```

**Props :**
- `items` (string[], requis) : Tableau de chaînes à afficher

### 3. Ajouter des liens et icônes

#### Liens internes

```vue
<NuxtLink to="/legal/privacy" class="text-primary-500 hover:text-primary-600 transition-colors">
  Politique de confidentialité
</NuxtLink>
```

#### Liens emails

```vue
<a href="mailto:contact@klyre.io" class="text-primary-500 hover:text-primary-600 transition-colors">
  contact@klyre.io
</a>
```

#### Icônes (Nuxt UI)

```vue
<UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-500" />
```

### 4. Ajouter le document à l'index

Mettez à jour `/pages/legal/index.vue` pour ajouter votre nouveau document :

```typescript
const legalDocs = [
  // ... documents existants
  {
    slug: 'mon-document',
    title: 'Mon Document',
    description: 'Description courte du document',
    icon: 'i-heroicons-document-text',
    lastUpdated: 'Mars 2026'
  }
]
```

## 📝 Exemples de patterns courants

### Pattern 1 : Section avec sous-sections

```vue
<LegalSection id="section-principale" title="1. Section principale">
  <h3 class="text-xl font-semibold text-gray-900 mb-4">1.1 Sous-section</h3>
  <p>Contenu de la sous-section...</p>

  <h3 class="text-xl font-semibold text-gray-900 mb-4 mt-8">1.2 Autre sous-section</h3>
  <p>Contenu de l'autre sous-section...</p>
</LegalSection>
```

### Pattern 2 : Informations de contact

```vue
<LegalInfoBox>
  <p class="text-gray-700"><strong>Email :</strong> contact@klyre.io</p>
  <p class="text-gray-700"><strong>Adresse :</strong> 18 Avenue...</p>
  <p class="text-gray-700"><strong>SIRET :</strong> 909 348 419 00013</p>
</LegalInfoBox>
```

### Pattern 3 : Liste avec icônes

```vue
<div class="space-y-3">
  <div class="flex items-start gap-3">
    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
    <span class="text-gray-700">Premier point</span>
  </div>
  <div class="flex items-start gap-3">
    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
    <span class="text-gray-700">Deuxième point</span>
  </div>
</div>
```

### Pattern 4 : Mise en évidence d'informations légales

```vue
<LegalInfoBox highlight>
  <p class="text-gray-700">
    <strong>Important :</strong> Information légale cruciale à mettre en évidence
  </p>
</LegalInfoBox>
```

## 🎯 Bonnes pratiques

### Structure du contenu

1. **IDs uniques** : Utilisez des IDs descriptifs pour les sections (`responsable-traitement`, `donnees-collectees`, etc.)
2. **Numérotation** : Numérotez les sections principales (1., 2., 3.) pour faciliter la navigation
3. **Hiérarchie** : Utilisez les balises HTML appropriées (`h2`, `h3`, `p`) pour une bonne structure sémantique

### Accessibilité

1. **Liens explicites** : Les textes de liens doivent être descriptifs
2. **Contraste** : Les couleurs respectent les ratios WCAG
3. **Navigation clavier** : Tous les éléments sont accessibles au clavier

### Performance

1. **Lazy loading** : Les pages sont chargées à la demande
2. **Scroll spy optimisé** : Utilise IntersectionObserver pour de meilleures performances
3. **CSS minimal** : Utilise Tailwind pour un CSS optimisé

### SEO

1. **useHead()** : Définissez toujours un titre et une description
2. **Structure sémantique** : Utilisez les balises HTML appropriées
3. **URLs propres** : `/legal/privacy`, `/legal/terms`, etc.

## 🔧 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  primary: {
    500: '#E8873C',  // Couleur principale
    // ...
  }
}
```

### Modifier le layout

Le layout est dans `layouts/legal.vue`. Vous pouvez personnaliser :
- La largeur maximale du contenu
- Le style du sidebar
- Les animations de scroll
- Le comportement responsive

### Ajouter des composants

Créez de nouveaux composants dans `/components/` et préfixez-les avec `Legal` pour une meilleure organisation.

## 📱 Responsive

Le layout s'adapte automatiquement :

- **Desktop (≥1024px)** : Sidebar fixe à gauche
- **Tablet (768-1023px)** : Sidebar en haut, contenu pleine largeur
- **Mobile (<768px)** : Navigation simplifiée, contenu optimisé

## 🐛 Dépannage

### Le scroll spy ne fonctionne pas

Vérifiez que :
1. Les IDs des sections correspondent à ceux du sommaire
2. Les sections ont bien un attribut `id`
3. Le JavaScript est activé

### Les styles ne s'appliquent pas

1. Vérifiez que Tailwind est bien configuré
2. Purgez le cache : `rm -rf .nuxt`
3. Redémarrez le serveur de développement

### Les liens ne fonctionnent pas

1. Utilisez `NuxtLink` pour les liens internes
2. Utilisez `<a>` pour les liens externes
3. Vérifiez les chemins relatifs

## 📚 Ressources

- [Nuxt UI Documentation](https://ui.nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Heroicons](https://heroicons.com)

## 🤝 Contribution

Pour ajouter de nouvelles fonctionnalités au système de layout :

1. Créez un nouveau composant dans `/components/`
2. Ajoutez les types nécessaires dans `/types/legal.ts`
3. Documentez l'utilisation dans ce guide
4. Créez un exemple dans `/pages/legal/`
