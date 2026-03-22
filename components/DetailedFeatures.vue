<template>
  <section class="w-full bg-gray-50 py-20">
    <div class="max-w-[1200px] mx-auto px-6">

      <!-- Top centered -->
      <div class="flex flex-col items-center">
        <div class="section-eyebrow">
          <span class="section-eyebrow__dot" aria-hidden="true"></span>
          <span class="section-eyebrow__label">Fonctionnalités</span>
        </div>
        <h2 class="section-heading-figma mt-4 max-w-[816px] mx-auto">
          Tout ce dont votre équipe marketing a besoin
        </h2>
        <p class="mt-4 text-base text-gray-500 text-center max-w-[520px] mx-auto">
          Un outil focalisé sur une seule question : la qualité de votre acquisition s'améliore ou se dégrade ?
        </p>
      </div>

      <!-- Feature grid - Figma uses #e6e6e6 background showing through as gaps -->
      <div class="mt-12 bg-[#e6e6e6] rounded-[16px] overflow-hidden flex flex-col gap-px">

        <!-- Row 1: Dashboard (full width) -->
        <div class="bg-white p-6 md:p-10">
          <span class="feature-label">Dashboard</span>
          <h3 class="mt-2 text-[24px] font-bold text-[#0a0a0a] tracking-[-0.24px]">Métriques en temps réel, toujours à jour</h3>
          <p class="mt-2 max-w-[460px] text-[15px] leading-[24.75px] text-[#575757]">
            Architecture compute-on-read : chaque KPI est recalculé à la volée. Zéro donnée obsolète, zéro pipeline de transformation.
          </p>
          <!-- KPI container -->
          <div class="mt-6 bg-[#fafafa] border border-[#e6e6e6] rounded-[12px] p-[25px]">
            <div class="flex gap-3 flex-wrap justify-center">
              <div
                v-for="kpi in dashboardKpis"
                :key="kpi.label"
                class="bg-white border border-[#e6e6e6] rounded-[10px] w-[calc(50%-6px)] sm:w-[150px] min-w-[100px] h-[106px] p-3.5"
              >
                <span class="text-[11px] font-medium text-[#a5a5a5]">{{ kpi.label }}</span>
                <p class="text-[20px] font-bold text-[#0a0a0a] tracking-[-0.4px] mt-1.5">{{ kpi.value }}</p>
                <p
                  class="text-[11px] font-semibold mt-1.5"
                  :class="kpi.positive ? 'text-[#22c55e]' : 'text-[#ef4444]'"
                >{{ kpi.change }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Campagnes + Alertes -->
        <div class="flex flex-col md:flex-row gap-px">
          <!-- Left: Campagnes -->
          <div class="bg-white p-6 md:p-10 flex-1">
            <span class="feature-label">Campagnes</span>
            <h3 class="mt-2 text-[24px] font-bold text-[#0a0a0a] tracking-[-0.24px]">Comparez vos campagnes</h3>
            <p class="mt-2 max-w-[460px] text-[15px] leading-[24.75px] text-[#575757]">
              Vue comparative de toutes vos campagnes Google Ads avec les métriques de conversion HubSpot.
            </p>
            <!-- Table -->
            <div class="mt-6 bg-[#fafafa] border border-[#e6e6e6] rounded-[12px] overflow-hidden">
              <!-- Header -->
              <div class="flex border-b border-[#e6e6e6]">
                <span class="table-header w-[38%]">Campagne</span>
                <span class="table-header w-[20%]">Leads</span>
                <span class="table-header w-[21%]">L→MQL</span>
                <span class="table-header w-[21%]">CPL</span>
              </div>
              <!-- Rows -->
              <div v-for="(row, i) in campaignRows" :key="i" :class="i < campaignRows.length - 1 ? 'border-b border-[#e6e6e6]' : ''" class="flex">
                <span class="table-cell-name w-[38%]">{{ row.name }}</span>
                <span class="table-cell w-[20%]">{{ row.leads }}</span>
                <span class="table-cell w-[21%]">{{ row.lmql }}</span>
                <span class="table-cell w-[21%]">{{ row.cpl }}</span>
              </div>
            </div>
          </div>

          <!-- Right: Alertes -->
          <div class="bg-white p-6 md:p-10 flex-1">
            <span class="feature-label">Alertes</span>
            <h3 class="mt-2 text-[24px] font-bold text-[#0a0a0a] tracking-[-0.24px]">Détection proactive</h3>
            <p class="mt-2 max-w-[460px] text-[15px] leading-[24.75px] text-[#575757]">
              Règles déterministes. Chaque alerte est explicable et actionnable.
            </p>
            <!-- Alert cards -->
            <div class="mt-6 bg-[#fafafa] border border-[#e6e6e6] rounded-[12px] p-[25px] min-h-[180px] flex flex-col gap-2.5">
              <div class="bg-white border border-[#e6e6e6] rounded-[10px] px-[17px] py-[15px] flex items-start gap-3">
                <span class="w-2 h-2 mt-[5px] rounded-[4px] bg-[#ef4444] shrink-0"></span>
                <div>
                  <p class="text-[13px] font-semibold text-[#0a0a0a]">Lead→MQL en baisse de 8,2%</p>
                  <p class="text-[12px] text-[#a5a5a5] mt-0.5">Summer Sale, Retargeting · Il y a 2h</p>
                </div>
              </div>
              <div class="bg-white border border-[#e6e6e6] rounded-[10px] px-[17px] py-[15px] flex items-start gap-3">
                <span class="w-2 h-2 mt-[5px] rounded-[4px] bg-[#ffa40a] shrink-0"></span>
                <div>
                  <p class="text-[13px] font-semibold text-[#0a0a0a]">Data Bias dépasse 30%</p>
                  <p class="text-[12px] text-[#a5a5a5] mt-0.5">34% des leads non attribués · Vérifier UTMs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Qualité des données + Tendances -->
        <div class="flex flex-col md:flex-row gap-px">
          <!-- Left: Qualité des données -->
          <div class="bg-white p-6 md:p-10 flex-1">
            <span class="feature-label">Qualité des données</span>
            <h3 class="mt-2 text-[24px] font-bold text-[#0a0a0a] tracking-[-0.24px]">Indicateur Data Bias</h3>
            <p class="mt-2 max-w-[460px] text-[15px] leading-[24.75px] text-[#575757]">
              Transparence totale : Klyre quantifie la couverture d'attribution pour que vous sachiez quand les métriques de coûts sont fiables — ou pas.
            </p>
          </div>

          <!-- Right: Tendances -->
          <div class="bg-white p-6 md:p-10 flex-1">
            <span class="feature-label">Tendances</span>
            <h3 class="mt-2 text-[24px] font-bold text-[#0a0a0a] tracking-[-0.24px]">Courbes quotidiennes</h3>
            <p class="mt-2 max-w-[460px] text-[15px] leading-[24.75px] text-[#575757]">
              Visualisez l'évolution jour par jour de chaque métrique. Identifiez les inflexions avant qu'elles ne deviennent des problèmes.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const dashboardKpis = [
  { label: 'Leads', value: '1 247', change: '+12% vs période préc.', positive: true },
  { label: 'MQLs', value: '834', change: '+8%', positive: true },
  { label: 'Lead → MQL', value: '66,9%', change: '-2,1%', positive: false },
  { label: 'Coût/MQL', value: '29,40 €', change: '-8%', positive: true },
  { label: 'Réunions', value: '289', change: '+15%', positive: true },
  { label: 'Délai moyen', value: '4,2 j', change: '-0,3 j', positive: true },
]

const campaignRows = [
  { name: 'Summer Sale', leads: '312', lmql: '67,0%', cpl: '26,20 €' },
  { name: 'Brand Aware', leads: '287', lmql: '62,0%', cpl: '17,80 €' },
  { name: 'Retargeting', leads: '156', lmql: '62,8%', cpl: '20,50 €' },
  { name: 'Product Launch', leads: '142', lmql: '78,9%', cpl: '21,80 €' },
]
</script>

<style scoped>
.feature-label {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.66px;
  text-transform: uppercase;
  color: #ff8c00;
}
.table-header {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 11px;
  letter-spacing: 0.44px;
  text-transform: uppercase;
  color: #a5a5a5;
  padding: 7.5px 12px 8.5px;
}
.table-cell-name {
  font-family: 'Archivo', sans-serif;
  font-weight: 600;
  font-size: 13px;
  color: #0a0a0a;
  padding: 10px 12px 11px;
}
.table-cell {
  font-family: 'Archivo', sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #0a0a0a;
  padding: 10px 12px 11px;
}
</style>
