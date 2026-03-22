<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <LegalSection id="editeur-site" title="1. Éditeur du site">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Le site klyre.io est édité par :
      </p>

      <LegalInfoBox title="Dénomination sociale : KLYRE">
        <p class="text-[15px] leading-[26.25px] text-[#575757]">Forme juridique : EURL</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">Directrice de la publication : IGEDAN SALIMA</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">Siège social : 16 Avenue Monteroni d'Arbia, 34920 Le Crès</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">SIRET : 909 348 419 00013</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">
          Contact :
          <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>
        </p>
      </LegalInfoBox>
    </LegalSection>

    <LegalSection id="hebergement" title="2. Hébergement">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">Le site klyre.io est hébergé par :</p>

      <LegalInfoBox title="Vercel Inc.">
        <p class="text-[15px] leading-[26.25px] text-[#575757]">340 Pine Street, Suite 700, San Francisco, CA 94104, États-Unis</p>
        <p class="text-[15px] leading-[26.25px]">
          <a href="https://vercel.com" target="_blank" class="text-[#ff8c00] underline">https://vercel.com</a>
        </p>
      </LegalInfoBox>

      <LegalInfoBox title="Netlify Inc.">
        <p class="text-[15px] leading-[26.25px] text-[#575757]">44 Montgomery Street, Suite 300, San Francisco, CA 94104, États-Unis</p>
        <p class="text-[15px] leading-[26.25px]">
          <a href="https://netlify.com" target="_blank" class="text-[#ff8c00] underline">https://netlify.com</a>
        </p>
      </LegalInfoBox>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les données traitées dans le cadre du service SaaS sont hébergées dans des infrastructures situées dans l'Union européenne conformément aux exigences du RGPD.
      </p>
    </LegalSection>

    <LegalSection id="propriete-intellectuelle" title="3. Propriété intellectuelle">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        L'ensemble des éléments composant le site klyre.io (textes, visuels, logo, interface, code source, dénomination) est la propriété exclusive de KLYRE ou de ses concédants de licence.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de KLYRE.
      </p>
    </LegalSection>

    <LegalSection id="liens-hypertextes" title="4. Liens hypertextes">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Le site klyre.io peut contenir des liens vers des sites tiers. KLYRE n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leurs pratiques en matière de données personnelles.
      </p>
    </LegalSection>

    <LegalSection id="limitation-responsabilite" title="5. Limitation de responsabilité">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les informations publiées sur klyre.io le sont à titre informatif. KLYRE s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne peut garantir leur exhaustivité ni leur absence d'erreur.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
      </p>
    </LegalSection>

    <LegalSection id="droit-applicable" title="6. Droit applicable">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux compétents du ressort de Montpellier seront seuls compétents.
      </p>
    </LegalSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = 'Mentions Légales'

const toc = [
  { id: 'editeur-site', label: '1. Éditeur du site' },
  { id: 'hebergement', label: '2. Hébergement' },
  { id: 'propriete-intellectuelle', label: '3. Propriété intellectuelle' },
  { id: 'liens-hypertextes', label: '4. Liens hypertextes' },
  { id: 'limitation-responsabilite', label: '5. Limitation de responsabilité' },
  { id: 'droit-applicable', label: '6. Droit applicable' }
]

useHead({
  title: 'Mentions Légales - Klyre',
  meta: [
    { name: 'description', content: 'Mentions légales du site Klyre.' }
  ]
})
</script>
