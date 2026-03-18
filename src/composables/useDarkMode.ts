import { ref, computed, watch } from 'vue'

type Theme = 'light' | 'dark' | 'system'

export const useDarkMode = () => {
  const theme = ref<Theme>(
    (localStorage.getItem('theme') as Theme) || 'system'
  )

  const isDark = computed(() => {
    if (theme.value === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    return theme.value === 'dark'
  })

  const setTheme = (newTheme: Theme): void => {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
    applyTheme()
  }

  const toggleTheme = (): void => {
    const newTheme: Theme = isDark.value ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const applyTheme = (): void => {
    const htmlElement = document.documentElement
    if (isDark.value) {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }

  // Observar cambios en preferencias del sistema
  watch(isDark, () => {
    applyTheme()
  })

  // Aplicar tema inicial
  applyTheme()

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    applyTheme
  }
}
