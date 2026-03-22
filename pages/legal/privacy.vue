<template>
  <NuxtLayout name="legal" :title="pageTitle" :table-of-contents="toc">
    <LegalSection id="responsable-traitement" title="1. Responsable du traitement">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Le responsable du traitement des données collectées via klyre.io est :
      </p>

      <LegalInfoBox title="KLYRE — EURL">
        <p class="text-[15px] leading-[26.25px] text-[#575757]">Représentée par : IGEDAN SALIMA</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">Siège social : 16 Avenue Monteroni d'Arbia, 34920 Le Crès</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">SIRET : 909 348 419 00013</p>
        <p class="text-[15px] leading-[26.25px] text-[#575757]">
          Contact DPO :
          <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>
        </p>
      </LegalInfoBox>
    </LegalSection>

    <LegalSection id="donnees-collectees" title="2. Données collectées">
      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424]">
        2.1 Via le formulaire de contact / demande de démo
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">Les données suivantes sont collectées :</p>

      <LegalList :items="contactData" />

      <p class="text-[13px] leading-[22.75px] text-[#a5a5a5] italic">
        Base légale : intérêt légitime (art. 6.1.f RGPD) — répondre à une demande commerciale entrante.
      </p>

      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424] mt-6">
        2.2 Via la création d'un compte utilisateur (trial)
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">Les données suivantes sont collectées :</p>

      <LegalList :items="trialData" />

      <p class="text-[13px] leading-[22.75px] text-[#a5a5a5] italic">
        Base légale : exécution d'un contrat (art. 6.1.b RGPD) — fourniture du service souscrit.
      </p>

      <h3 class="font-semibold text-[17px] leading-[27.2px] text-[#242424] mt-6">
        2.3 Données techniques (collecte automatique)
      </h3>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Lors de toute visite sur le site, les données suivantes peuvent être collectées automatiquement :
      </p>

      <LegalList :items="technicalData" />

      <p class="text-[13px] leading-[22.75px] text-[#a5a5a5] italic">
        Base légale : intérêt légitime — sécurité et amélioration du service.
      </p>
    </LegalSection>

    <LegalSection id="finalites-traitement" title="3. Finalités du traitement">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">Les données collectées sont utilisées pour :</p>

      <LegalList :items="purposes" />

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE ne vend pas et ne cède pas les données personnelles à des tiers à des fins commerciales.
      </p>
    </LegalSection>

    <LegalSection id="duree-conservation" title="4. Durée de conservation">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">Les données sont conservées pour les durées suivantes :</p>

      <ul class="flex flex-col gap-2">
        <li class="relative pl-5">
          <span class="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-[3px] bg-[#ffbb32]" />
          <span class="text-[15px] leading-[24px] text-[#575757]">
            Données de contact (demande démo) : <span class="font-semibold text-[#0a0a0a]">3 ans</span> à compter du dernier contact
          </span>
        </li>
        <li class="relative pl-5">
          <span class="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-[3px] bg-[#ffbb32]" />
          <span class="text-[15px] leading-[24px] text-[#575757]">
            Données de compte utilisateur : <span class="font-semibold text-[#0a0a0a]">durée de la relation contractuelle + 3 ans</span>
          </span>
        </li>
        <li class="relative pl-5">
          <span class="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-[3px] bg-[#ffbb32]" />
          <span class="text-[15px] leading-[24px] text-[#575757]">
            Données techniques : <span class="font-semibold text-[#0a0a0a]">13 mois</span> maximum
          </span>
        </li>
      </ul>
    </LegalSection>

    <LegalSection id="destinataires-donnees" title="5. Destinataires des données">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">Les données peuvent être partagées avec :</p>

      <LegalList :items="recipients" />

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Tout transfert hors Union européenne est encadré par les garanties appropriées (clauses contractuelles types de la Commission européenne).
      </p>
    </LegalSection>

    <LegalSection id="droits-personnes" title="6. Droits des personnes concernées">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
      </p>

      <LegalList :items="rights" />

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Pour exercer ces droits, adressez votre demande à :
        <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Vous disposez également du droit d'introduire une réclamation auprès de la
        <a href="https://www.cnil.fr" target="_blank" class="text-[#ff8c00] underline">CNIL</a>.
      </p>
    </LegalSection>

    <LegalSection id="cookies" title="7. Cookies">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Le site klyre.io utilise des cookies techniques nécessaires au fonctionnement du service (session, authentification). Aucun cookie publicitaire ou de traçage tiers n'est déposé sans votre consentement préalable.
      </p>

      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Vous pouvez configurer votre navigateur pour bloquer les cookies. Certaines fonctionnalités du service peuvent alors être affectées.
      </p>
    </LegalSection>

    <LegalSection id="securite" title="8. Sécurité">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        KLYRE met en oeuvre les mesures techniques et organisationnelles appropriées pour protéger les données contre toute perte, accès non autorisé, divulgation ou altération. Les connexions sont chiffrées via HTTPS/TLS. Les mots de passe sont hashés. Les accès aux données sont restreints aux personnes habilitées.
      </p>
    </LegalSection>

    <LegalSection id="modifications" title="9. Modifications">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        La présente politique peut être mise à jour. La date de dernière mise à jour est indiquée en en-tête. En cas de modification substantielle, les utilisateurs seront informés par email ou via une notification sur le service.
      </p>
    </LegalSection>

    <LegalSection id="contact" title="10. Contact">
      <p class="text-[15px] leading-[26.25px] text-[#575757]">
        Pour toute question relative à cette politique :
        <a href="mailto:contact@klyre.io" class="text-[#ff8c00] underline">contact@klyre.io</a>
      </p>
    </LegalSection>
  </NuxtLayout>
</template>

<script setup lang="ts">
const pageTitle = 'Politique de Confidentialité'

const toc = [
  { id: 'responsable-traitement', label: '1. Responsable du traitement' },
  { id: 'donnees-collectees', label: '2. Données collectées' },
  { id: 'finalites-traitement', label: '3. Finalités du traitement' },
  { id: 'duree-conservation', label: '4. Durée de conservation' },
  { id: 'destinataires-donnees', label: '5. Destinataires des données' },
  { id: 'droits-personnes', label: '6. Droits des personnes' },
  { id: 'cookies', label: '7. Cookies' },
  { id: 'securite', label: '8. Sécurité' },
  { id: 'modifications', label: '9. Modifications' },
  { id: 'contact', label: '10. Contact' }
]

const contactData = [
  'Prénom et nom',
  'Adresse email professionnelle',
  "Nom de l'entreprise",
  'Budget publicitaire mensuel (fourchette)',
  'CRM utilisé',
  "Secteur d'activité"
]

const trialData = [
  'Adresse email professionnelle',
  'Mot de passe (hashé, non stocké en clair)',
  'Données de connexion aux intégrations (Google Ads, HubSpot) via OAuth — KLYRE ne stocke pas les identifiants tiers',
  "Données d'usage du produit (événements de navigation, fonctionnalités utilisées)"
]

const technicalData = [
  'Adresse IP',
  'Type de navigateur et version',
  'Pages visitées et durée de visite',
  'Source de trafic (référent)'
]

const purposes = [
  'Répondre aux demandes de démo et de contact',
  'Fournir et améliorer le service KLYRE',
  'Gérer les comptes utilisateurs et les accès',
  'Envoyer des communications liées au service (notifications, mises à jour, alertes)',
  'Assurer la sécurité et prévenir les fraudes',
  'Respecter les obligations légales applicables'
]

const recipients = [
  "Les sous-traitants techniques assurant l'hébergement et l'infrastructure (Vercel, Netlify, hébergeurs EU)",
  "Les outils d'analyse d'usage dans le cadre de l'amélioration du produit"
]

const rights = [
  "Droit d'accès à vos données",
  'Droit de rectification',
  "Droit à l'effacement (droit à l'oubli)",
  'Droit à la limitation du traitement',
  'Droit à la portabilité',
  "Droit d'opposition"
]

useHead({
  title: 'Politique de Confidentialité - Klyre',
  meta: [
    { name: 'description', content: 'Politique de confidentialité et protection des données personnelles de Klyre.' }
  ]
})
</script>
