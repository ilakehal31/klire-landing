const isOpen = ref(false)

export function useWaitlistModal() {
  function open() {
    isOpen.value = true
  }

  return {
    isOpen,
    open,
  }
}
