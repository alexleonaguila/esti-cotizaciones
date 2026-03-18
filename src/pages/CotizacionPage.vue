<script setup lang="ts">
import { ref } from 'vue'
import CotizacionViewer from '../components/CotizacionViewer.vue'
import ShopifyCotizacion from '../components/ShopifyCotizacion.vue'
import PropuestaWhatsAppCotizacion from '../components/PropuestaWhatsAppCotizacion.vue'
import { useDarkMode } from '../composables/useDarkMode'

const { isDark, toggleTheme } = useDarkMode()
const currentYear = ref<number>(new Date().getFullYear())
const selectedQuote = ref<'cotizacion1' | 'cotizacion2' | 'cotizacion3'>('cotizacion1')
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
    <!-- NAVBAR -->
    <nav
      class="fixed top-0 w-full bg-white dark:bg-slate-900 shadow-md dark:shadow-lg dark:shadow-black/50 z-50 transition-colors duration-300"
      role="navigation"
      aria-label="Navegación principal"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <router-link to="/" class="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:rounded">
            <span class="text-2xl font-bold text-slate-900 dark:text-white">ESTI</span>
            <span class="text-2xl font-bold text-blue-600 dark:text-blue-400 ml-1">Cotizaciones</span>
          </router-link>

          <!-- Dark Mode Toggle -->
          <div class="flex items-center gap-4">
            <button
              @click="toggleTheme"
              :aria-label="`Cambiar a tema ${isDark ? 'claro' : 'oscuro'}`"
              class="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <svg v-if="!isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1h4a1 1 0 110 2h-4zm0 14a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1H6a1 1 0 110-2h4z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- CONTENIDO PRINCIPAL -->
    <section class="pt-20 sm:pt-24 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800 transition-colors duration-300 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <!-- Header -->
        <div class="mb-6 sm:mb-12">
          <h1 class="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
            Cotización de Proyecto
          </h1>
          <p class="text-sm sm:text-lg text-slate-600 dark:text-slate-300">
            Propuesta personalizada para tu negocio
          </p>
        </div>

        <!-- Selector de Cotizaciones -->
        <div class="mb-6 sm:mb-8 bg-white dark:bg-slate-700 rounded-lg sm:rounded-xl shadow-lg overflow-hidden">
          <div class="flex flex-col gap-1 p-2 sm:p-0">
            <button
              @click="selectedQuote = 'cotizacion1'"
              :class="[
                'w-full py-2 sm:py-4 px-2 sm:px-6 font-bold text-xs sm:text-lg transition-all duration-200 flex items-center justify-center gap-1 sm:gap-3 rounded-lg sm:rounded-none min-h-[40px] sm:min-h-[44px]',
                selectedQuote === 'cotizacion1'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-500'
              ]"
              :aria-pressed="selectedQuote === 'cotizacion1'"
              role="tab"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span class="hidden sm:inline">E-Commerce Custom</span>
              <span class="sm:hidden">E-Commerce</span>
            </button>
            <button
              @click="selectedQuote = 'cotizacion2'"
              :class="[
                'w-full py-2 sm:py-4 px-2 sm:px-6 font-bold text-xs sm:text-lg transition-all duration-200 flex items-center justify-center gap-1 sm:gap-3 rounded-lg sm:rounded-none min-h-[40px] sm:min-h-[44px]',
                selectedQuote === 'cotizacion2'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-500'
              ]"
              :aria-pressed="selectedQuote === 'cotizacion2'"
              role="tab"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span class="hidden sm:inline">Propuesta WhatsApp</span>
              <span class="sm:hidden">WhatsApp</span>
            </button>
            <button
              @click="selectedQuote = 'cotizacion3'"
              :class="[
                'w-full py-2 sm:py-4 px-2 sm:px-6 font-bold text-xs sm:text-lg transition-all duration-200 flex items-center justify-center gap-1 sm:gap-3 rounded-lg sm:rounded-none min-h-[40px] sm:min-h-[44px]',
                selectedQuote === 'cotizacion3'
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-slate-100 dark:bg-slate-600 text-slate-900 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-500'
              ]"
              :aria-pressed="selectedQuote === 'cotizacion3'"
              role="tab"
            >
              <svg class="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"></path>
              </svg>
              <span class="hidden sm:inline">Shopify</span>
              <span class="sm:hidden">Shopify</span>
            </button>
          </div>
        </div>

        <!-- Contenido dinámico según selección -->
        <div class="transition-all duration-300">
          <CotizacionViewer v-if="selectedQuote === 'cotizacion1'" />
          <PropuestaWhatsAppCotizacion v-else-if="selectedQuote === 'cotizacion2'" />
          <ShopifyCotizacion v-else-if="selectedQuote === 'cotizacion3'" />
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-slate-900 text-white py-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="mb-4 sm:mb-0">
            <span class="text-xl font-bold">ESTI<span class="text-blue-400">Cotizaciones</span></span>
          </div>
          <p class="text-slate-400 text-center sm:text-right">
            © {{ currentYear }} ESTI Cotizaciones. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
