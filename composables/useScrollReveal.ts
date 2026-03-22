import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useScrollReveal(threshold = 0.15): { root: Ref<HTMLElement | null> } {
  const root = ref<HTMLElement | null>(null)
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!root.value) return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible')
            observer?.unobserve(entry.target)
          }
        }
      },
      { threshold }
    )

    const targets = root.value.querySelectorAll('.scroll-reveal')
    targets.forEach((el) => observer!.observe(el))
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { root }
}
