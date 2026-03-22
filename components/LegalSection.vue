<template>
  <section :id="id" class="scroll-mt-24 mt-14 first:mt-0">
    <h2 class="font-bold text-[22px] leading-[35.2px] tracking-[-0.22px] text-[#0a0a0a] pb-[13px] border-b border-[#e6e6e6]">
      {{ title }}
    </h2>

    <div class="mt-5 space-y-4">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: string
  title: string
}

defineProps<Props>()
</script>
