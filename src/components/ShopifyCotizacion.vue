<script setup lang="ts">
import { ref } from 'vue'

interface QuoteData {
  clientName: string
  projectTitle: string
  developmentPrice: number
  platformCost: string
  paymentMethods: Array<{
    name: string
    rate: string
    recommended: boolean
  }>
}

const props = withDefaults(
  defineProps<{
    data?: QuoteData
  }>(),
  {
    data: () => ({
      clientName: 'Eduard López Sánchez',
      projectTitle: 'Tu Tienda en Línea Shopify',
      developmentPrice: 9500,
      platformCost: '$39 USD/mes (~$650 MXN)',
      paymentMethods: [
        {
          name: 'Shopify Payments',
          rate: '3.6% + $3 MXN',
          recommended: true
        },
        {
          name: 'Mercado Pago (Externos)',
          rate: '3.49% + $4 + 2% extra',
          recommended: false
        }
      ]
    })
  }
)
</script>

<template>
  <div class="w-full relative">
    <!-- Botón flotante para compartir/contactar en móvil -->
    <div class="fixed bottom-4 right-4 sm:static sm:mb-6 z-40">
      <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 sm:px-6 rounded-full sm:rounded-lg transition-all shadow-lg flex items-center gap-2 w-full sm:w-auto">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.346.72.82 1.385 1.38 1.96l1.404-1.404a1 1 0 011.414 0l3.536 3.536a1 1 0 010 1.414l-1.404 1.404c.575.56 1.24 1.034 1.96 1.38l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.57c-6.164 0-11.174-5.01-11.174-11.174V3z"></path>
        </svg>
        <span class="hidden sm:inline">Contactar</span>
      </button>
    </div>

    <main class="max-w-5xl mx-auto px-2 sm:px-4 py-2 sm:py-0 sm:-mt-8">
      <!-- Intro Card -->
      <div class="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-slate-100">
        <div class="flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
          <div class="bg-blue-50 p-3 sm:p-4 rounded-lg sm:rounded-xl shrink-0">
            <svg class="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z"></path>
            </svg>
          </div>
          <div>
            <h2 class="text-lg sm:text-2xl font-bold mb-2">¿Por qué Shopify para tu catálogo?</h2>
            <p class="text-sm sm:text-base text-slate-600 leading-relaxed">
              Es la plataforma líder mundial. Te ofrece una estabilidad total, seguridad bancaria y una aplicación móvil potente para que gestiones pedidos y stock desde tu celular sin complicaciones.
            </p>
          </div>
        </div>
      </div>

      <!-- 3 Pillars Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
        
        <!-- Section 1: Development -->
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden flex flex-col border border-slate-100">
          <div class="bg-blue-600 p-3 sm:p-4 text-white flex items-center gap-2 sm:gap-3">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m-6 0a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
            <h3 class="font-bold text-sm sm:text-base">Desarrollo e Implementación</h3>
          </div>
          <div class="p-4 sm:p-6 flex-grow">
            <ul class="space-y-2 sm:space-y-4 text-xs sm:text-sm text-slate-600">
              <li class="flex gap-2">
                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Diseño Premium optimizado para móviles.</span>
              </li>
              <li class="flex gap-2">
                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Carga de 50 artículos con variantes.</span>
              </li>
              <li class="flex gap-2">
                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Capacitación de 1 hora para tu equipo.</span>
              </li>
              <li class="flex gap-2">
                <svg class="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Logística y envíos locales.</span>
              </li>
            </ul>
          </div>
          <div class="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 text-center">
            <div class="text-slate-400 line-through text-xs sm:text-sm font-medium">$12,500 MXN</div>
            <div class="text-2xl sm:text-3xl font-black text-blue-600">${{ data.developmentPrice.toLocaleString('es-MX') }} MXN</div>
            <div class="mt-2 inline-flex items-center gap-1 bg-green-100 text-green-700 text-[10px] sm:text-xs font-bold px-2 py-1 rounded">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
              </svg>
              BONO CASO DE ÉXITO
            </div>
          </div>
        </div>

        <!-- Section 2: Platform -->
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden flex flex-col border border-slate-100">
          <div class="bg-indigo-600 p-3 sm:p-4 text-white flex items-center gap-2 sm:gap-3">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
            </svg>
            <h3 class="font-bold text-sm sm:text-base">Costo de Plataforma</h3>
          </div>
          <div class="p-4 sm:p-6 flex-grow">
            <p class="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
              Suscripción mensual directa con Shopify para mantener tu tienda activa 24/7.
            </p>
            <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
              <span class="block text-[10px] sm:text-xs font-bold text-indigo-600 uppercase">Plan Basic</span>
              <span class="text-xl sm:text-2xl font-bold text-slate-800">{{ data.platformCost }}</span>
            </div>
            <ul class="space-y-2 text-xs text-slate-500 mt-3">
              <li class="flex items-center gap-2">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Servidores ilimitados
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                Seguridad SSL (Bancaria)
              </li>
            </ul>
          </div>
          <div class="p-4 bg-slate-50 border-t border-slate-100">
            <p class="text-[10px] text-center text-slate-400 uppercase tracking-wider font-bold italic">
              Pago directo a Shopify
            </p>
          </div>
        </div>

        <!-- Section 3: Payments -->
        <div class="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg overflow-hidden flex flex-col border border-slate-100">
          <div class="bg-slate-800 p-3 sm:p-4 text-white flex items-center gap-2 sm:gap-3">
            <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
            </svg>
            <h3 class="font-bold text-sm sm:text-base">Opciones de Cobro</h3>
          </div>
          <div class="p-6 flex-grow">
            <div class="space-y-4">
              <div v-for="method in data.paymentMethods" :key="method.name" :class="[
                'rounded-xl p-3 border-2',
                method.recommended 
                  ? 'border-blue-500 bg-blue-50 relative' 
                  : 'border-slate-200 bg-white'
              ]">
                <div v-if="method.recommended" class="absolute -top-3 right-3 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  RECOMENDADO
                </div>
                <h4 :class="['font-bold text-sm', method.recommended ? 'text-blue-900' : 'text-slate-700']">
                  {{ method.name }}
                </h4>
                <div :class="['font-bold text-sm mt-1', method.recommended ? 'text-blue-900' : 'text-slate-700']">
                  {{ method.rate }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="bg-blue-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg sm:shadow-xl">
        <h2 class="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 italic">¿Avanzamos con el descuento de Caso de Éxito?</h2>
        <p class="text-blue-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
          Asegura el precio preferencial de <span class="font-bold text-white">${{ data.developmentPrice.toLocaleString('es-MX') }} MXN</span> y lanza tu boutique al siguiente nivel digital en menos de 2 semanas.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
          <button class="bg-white text-blue-600 font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl shadow-lg hover:bg-blue-50 transition-colors text-sm sm:text-base min-h-[44px]">
            SÍ, EMPECEMOS
          </button>
          <button class="bg-blue-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl hover:bg-blue-800 transition-colors text-sm sm:text-base min-h-[44px]">
            Resolver Dudas
          </button>
        </div>
      </div>
    </main>

    <footer class="mt-8 sm:mt-12 text-center text-slate-400 text-xs sm:text-sm px-4">
      <p>© 2026 ESTI Cotizaciones - Elevando Marcas Mexicanas</p>
    </footer>
  </div>
</template>
