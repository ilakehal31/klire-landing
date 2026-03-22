# 🚀 Quick Start - Layout Legal

Guide rapide pour utiliser le système de layout pour documents légaux.

## ⚡ Démarrage en 30 secondes

### 1. Démarrer le serveur
```bash
npm run dev
```

### 2. Visiter les pages
- **Index** : http://localhost:3000/legal
- **Politique de confidentialité** : http://localhost:3000/legal/privacy
- **Mentions légales** : http://localhost:3000/legal/terms
- **CGU** : http://localhost:3000/legal/cgu

### 3. Créer un nouveau document

Créez `pages/legal/mon-doc.vue` :

```vue
<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <LegalSection id="section-1" title="1. Ma section">
      <p>Mon contenu...</p>
      
      <LegalInfoBox title="Important" :highlight="true">
        <p>Information importante</p>
      </LegalInfoBox>
      
      <LegalList :items="['Point 1', 'Point 2', 'Point 3']" />
    </LegalSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = 'Mon Document'
const toc = [{ id: 'section-1', label: '1. Ma section' }]

useHead({
  title: `${pageTitle} - Klyre`,
  meta: [{ name: 'description', content: 'Description...' }]
})
</script>
```

## 📦 Composants disponibles

### LegalSection
```vue
<LegalSection id="mon-id" title="1. Titre">
  <p>Contenu...</p>
</LegalSection>
```

### LegalInfoBox
```vue
<!-- Gris -->
<LegalInfoBox title="Info">
  <p>Contenu...</p>
</LegalInfoBox>

<!-- Orange (highlight) -->
<LegalInfoBox title="Important" :highlight="true">
  <p>Contenu important...</p>
</LegalInfoBox>
```

### LegalList
```vue
<LegalList :items="['Item 1', 'Item 2', 'Item 3']" />
```

## 🎨 Classes utiles

### Liens
```vue
<!-- Lien interne -->
<NuxtLink to="/legal/privacy" class="text-primary-500 hover:text-primary-600">
  Lien
</NuxtLink>

<!-- Email -->
<a href="mailto:contact@klyre.io" class="text-primary-500 hover:text-primary-600">
  contact@klyre.io
</a>
```

### Icônes
```vue
<UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-500" />
```

### Titres
```vue
<h3 class="text-xl font-semibold text-gray-900 mb-4">
  Sous-titre
</h3>
```

## 🔗 Liens dans le footer

Le footer a déjà été mis à jour avec les liens vers :
- `/legal/privacy` - Politique de confidentialité
- `/legal/cgu` - Conditions d'utilisation
- `/legal/terms` - Mentions légales

## 📚 Documentation complète

Pour plus de détails, consultez :
- `LEGAL_LAYOUT_GUIDE.md` - Guide complet
- `LEGAL_SETUP_COMPLETE.md` - Récapitulatif de l'installation
- `layouts/README.md` - Documentation du layout

## ✅ Checklist avant déploiement

- [ ] Mettre à jour les informations légales (SIRET, adresse)
- [ ] Vérifier les dates de dernière mise à jour
- [ ] Tester sur mobile
- [ ] Vérifier tous les liens
- [ ] Ajouter les meta descriptions

## 🎯 Prochaines étapes

1. Personnaliser le contenu des 3 pages d'exemple
2. Ajouter d'autres documents si nécessaire
3. Tester la navigation
4. Déployer !

**C'est tout ! Votre système de layout légal est prêt à l'emploi. 🎉**
