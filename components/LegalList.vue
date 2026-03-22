<template>
  <ul class="flex flex-col gap-2">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="relative pl-5"
    >
      <span class="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-[3px] bg-[#ffbb32]" />
      <span class="text-[15px] leading-[24px] text-[#575757]">{{ item }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  items: string[]
}

defineProps<Props>()
</script>
