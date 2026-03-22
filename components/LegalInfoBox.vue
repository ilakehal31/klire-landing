<template>
  <div class="bg-[#fafafa] border border-[#e6e6e6] rounded-[10px] px-[25px] py-[21px] flex flex-col gap-1">
    <p v-if="title" class="font-semibold text-[15px] leading-[26.25px] text-[#0a0a0a]">
      {{ title }}
    </p>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  highlight?: boolean
}

withDefaults(defineProps<Props>(), {
  highlight: false
})
</script>
