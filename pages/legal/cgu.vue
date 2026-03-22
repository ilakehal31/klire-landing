<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <LegalSection id="objet" title="1. Objet">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du service KLYRE, accessible à l'adresse klyre.io, édité par KLYRE EURL, 16 Avenue Monteroni d'Arbia, 34920 Le Crès — SIRET 909 348 419 00013.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Toute utilisation du service implique l'acceptation sans réserve des présentes CGU.
      </p>
    </LegalSection>

    <LegalSection id="description-service" title="2. Description du service">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE est un service SaaS (Software as a Service) destiné aux professionnels du marketing et de l'acquisition. Il permet de connecter des données marketing (Google Ads) et des données CRM (HubSpot) afin de détecter les anomalies dans le cycle d'acquisition avant qu'elles n'impactent le pipeline ou le revenu.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE est exclusivement destiné à un usage professionnel (B2B). L'accès au service est conditionné à la création d'un compte et à la souscription d'un plan.
      </p>
    </LegalSection>

    <LegalSection id="acces-service" title="3. Accès au service">
      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424]">
        3.1 Création de compte
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        L'accès au service nécessite la création d'un compte avec une adresse email professionnelle valide. L'utilisateur est responsable de la confidentialité de ses identifiants de connexion et de toute activité effectuée sous son compte.
      </p>

      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424] mt-6">
        3.2 Période d'essai
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Un essai gratuit de 14 jours est proposé sur le plan Essentiel. Aucune carte bancaire n'est requise pour démarrer l'essai. À l'issue de la période d'essai, l'accès au service est suspendu sauf souscription d'un plan payant.
      </p>

      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424] mt-6">
        3.3 Intégrations
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        L'utilisation du service requiert la connexion à des comptes tiers (Google Ads, HubSpot) via des mécanismes d'autorisation OAuth. L'utilisateur autorise KLYRE à accéder en lecture aux données de ces comptes dans le strict cadre des finalités décrites aux présentes CGU. KLYRE ne stocke pas les identifiants des comptes tiers.
      </p>
    </LegalSection>

    <LegalSection id="obligations-utilisateur" title="4. Obligations de l'utilisateur">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">L'utilisateur s'engage à :</p>

      <LegalList :items="obligations" />
    </LegalSection>

    <LegalSection id="donnees-confidentialite" title="5. Données et confidentialité">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Le traitement des données personnelles est régi par la
        <NuxtLink to="/legal/privacy" class="text-[#ff8c00] underline">Politique de Confidentialité</NuxtLink>
        disponible sur le site.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Concernant les données clients connectées via les intégrations :
      </p>

      <LegalList :items="dataTerms" />
    </LegalSection>

    <LegalSection id="propriete-intellectuelle" title="6. Propriété intellectuelle">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE conserve l'intégralité des droits de propriété intellectuelle sur le service, son code, ses algorithmes, son interface et ses contenus. L'utilisation du service ne confère à l'utilisateur aucun droit de propriété sur ces éléments.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les données générées par l'utilisateur via le service (rapports, exports, signaux détectés) restent la propriété de l'utilisateur.
      </p>
    </LegalSection>

    <LegalSection id="disponibilite-sla" title="7. Disponibilité et niveaux de service">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE s'efforce d'assurer la disponibilité du service 24h/24, 7j/7. Des interruptions peuvent survenir pour maintenance, mise à jour ou pour des raisons indépendantes de la volonté de KLYRE. KLYRE s'engage à informer les utilisateurs des maintenances programmées.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE ne garantit pas que le service sera exempt d'erreurs ou d'interruptions, et ne saurait être tenu responsable des préjudices résultant d'une indisponibilité temporaire.
      </p>
    </LegalSection>

    <LegalSection id="responsabilite" title="8. Responsabilité">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE est un outil d'aide à la décision. Les signaux et diagnostics fournis par le service sont des indications basées sur l'analyse des données connectées. KLYRE ne saurait être tenu responsable des décisions prises par l'utilisateur sur la base de ces informations.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        La responsabilité de KLYRE est limitée aux dommages directs prouvés et ne peut excéder les sommes effectivement payées par l'utilisateur au cours des 12 derniers mois précédant le fait générateur.
      </p>
    </LegalSection>

    <LegalSection id="tarification-facturation" title="9. Tarification et facturation">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les plans et tarifs sont disponibles sur la page Pricing du site. KLYRE se réserve le droit de modifier ses tarifs avec un préavis de 30 jours. Les modifications tarifaires ne s'appliquent pas aux périodes déjà facturées.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les abonnements sont facturés mensuellement ou annuellement selon le plan souscrit. Le renouvellement est automatique sauf résiliation avant la date de renouvellement.
      </p>
    </LegalSection>

    <LegalSection id="resiliation" title="10. Résiliation">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        L'utilisateur peut résilier son abonnement à tout moment depuis son espace compte ou par email à
        <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>.
        La résiliation prend effet à la fin de la période en cours. Aucun remboursement n'est accordé pour les périodes partielles.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE se réserve le droit de suspendre ou de résilier l'accès au service en cas de violation des présentes CGU, avec notification préalable sauf en cas d'urgence ou de comportement frauduleux.
      </p>
    </LegalSection>

    <LegalSection id="modification-cgu" title="11. Modification des CGU">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE peut modifier les présentes CGU à tout moment. Les utilisateurs sont informés par email de toute modification substantielle avec un préavis de 15 jours. L'utilisation du service après notification vaut acceptation des nouvelles conditions.
      </p>
    </LegalSection>

    <LegalSection id="droit-applicable" title="12. Droit applicable et juridiction">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Les présentes CGU sont soumises au droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux du ressort de Montpellier, sauf disposition légale impérative contraire.
      </p>
    </LegalSection>

    <LegalSection id="contact" title="13. Contact">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Pour toute question relative aux présentes CGU :
        <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>
      </p>
    </LegalSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = "Conditions Générales d'Utilisation"

const toc = [
  { id: 'objet', label: '1. Objet' },
  { id: 'description-service', label: '2. Description du service' },
  { id: 'acces-service', label: '3. Accès au service' },
  { id: 'obligations-utilisateur', label: "4. Obligations de l'utilisateur" },
  { id: 'donnees-confidentialite', label: '5. Données et confidentialité' },
  { id: 'propriete-intellectuelle', label: '6. Propriété intellectuelle' },
  { id: 'disponibilite-sla', label: '7. Disponibilité et SLA' },
  { id: 'responsabilite', label: '8. Responsabilité' },
  { id: 'tarification-facturation', label: '9. Tarification et facturation' },
  { id: 'resiliation', label: '10. Résiliation' },
  { id: 'modification-cgu', label: '11. Modification des CGU' },
  { id: 'droit-applicable', label: '12. Droit applicable' },
  { id: 'contact', label: '13. Contact' }
]

const obligations = [
  'Utiliser le service conformément à sa destination et aux présentes CGU',
  'Fournir des informations exactes lors de la création du compte',
  "Ne pas tenter d'accéder aux comptes ou données d'autres utilisateurs",
  "Ne pas utiliser le service à des fins illicites ou contraires à l'ordre public",
  'Ne pas reproduire, revendre ou exploiter commercialement le service sans autorisation'
]

const dataTerms = [
  'KLYRE accède aux données en lecture seule',
  'Les données sont utilisées exclusivement pour la fourniture du service',
  'KLYRE ne cède ni ne vend ces données à des tiers',
  'Les données sont traitées dans des infrastructures conformes au RGPD'
]

useHead({
  title: "Conditions Générales d'Utilisation - Klyre",
  meta: [
    { name: 'description', content: "Conditions générales d'utilisation du service Klyre." }
  ]
})
</script>
