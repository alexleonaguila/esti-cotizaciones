<script setup lang="ts">
import { ref, computed } from 'vue'
import html2pdf from 'html2pdf.js'

interface QuoteData {
  clientName: string
  projectTitle: string
  price: number
  technologies: string[]
  description: string
}

const props = withDefaults(
  defineProps<{
    data?: QuoteData
  }>(),
  {
    data: () => ({
      clientName: 'Eduard Boutique',
      projectTitle: 'E-Commerce Profesional',
      price: 14500,
      technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
      description: 'Solución tecnológica robusta diseñada para manejar un catálogo de 200 productos con variantes'
    })
  }
)

const isPdfGenerating = ref(false)

const generatePDF = async () => {
  const cotizacionElement = document.getElementById('cotizacion-pdf')
  if (!cotizacionElement) return

  isPdfGenerating.value = true
  document.body.classList.add('pdf-exporting')

  try {
    const options: any = {
      margin: 0,
      filename: `Cotizacion_${props.data.clientName.replace(/\s+/g, '_')}_ESTI_Solutions.pdf`,
      image: { type: 'jpeg' as const, quality: 1 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        scrollY: 0,
        windowWidth: 794
      },
      jsPDF: { unit: 'px', format: [794, 1122], orientation: 'portrait' }
    }

    await html2pdf().set(options).from(cotizacionElement).save()
  } finally {
    document.body.classList.remove('pdf-exporting')
    isPdfGenerating.value = false
  }
}
</script>

<template>
  <div class="w-full relative">
    <!-- Botón de descarga flotante para móvil -->
    <button 
      @click="generatePDF"
      :disabled="isPdfGenerating"
      class="fixed bottom-4 right-4 sm:static sm:mb-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-2 px-4 sm:px-6 rounded-full sm:rounded-lg transition-all z-40 flex items-center gap-2 shadow-lg"
    >
      <svg v-if="!isPdfGenerating" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
      </svg>
      <svg v-else class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
      <span class="hidden sm:inline">{{ isPdfGenerating ? 'Descargando...' : 'Descargar PDF' }}</span>
      <span class="sm:hidden">{{ isPdfGenerating ? '...' : 'PDF' }}</span>
    </button>

    <main id="cotizacion-pdf" class="escritorio-virtual mx-auto">
      <!-- PÁGINA 1 -->
      <div class="hoja-documento">
        <header class="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-6 sm:p-12 text-center relative overflow-hidden flex-shrink-0">
          <div class="absolute top-[-50px] left-[-50px] w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
          <div class="absolute bottom-[-50px] right-[-50px] w-40 h-40 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>

          <div class="relative z-10">
            <p class="text-blue-400 font-bold tracking-widest uppercase text-sm mb-2">Propuesta de Desarrollo</p>
            <h1 class="text-3xl sm:text-5xl font-bold mb-4 leading-tight">{{ data.projectTitle }}</h1>
            <div class="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mt-2">
              <p class="text-lg">Cliente: <span class="font-semibold text-white">{{ data.clientName }}</span></p>
            </div>
          </div>
        </header>

        <section class="p-6 sm:p-10 text-center border-b border-gray-100 flex-shrink-0">
          <p class="text-gray-600 leading-relaxed text-sm sm:text-lg px-4 sm:px-8">
            {{ data.description }}
          </p>
          <div class="mt-6 inline-flex items-center text-sm text-gray-400 font-medium bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <svg class="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
            Desarrollado por ESTI Cotizaciones
          </div>
        </section>

        <section class="p-6 sm:p-10 bg-slate-50 flex-grow">
          <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Alcance del Proyecto</h2>
            <span class="bg-blue-100/50 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm">Fase 1: Lanzamiento Ágil</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-blue-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-blue-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1 text-sm sm:text-base">Diseño UX/UI Responsivo</h3>
                <p class="text-xs sm:text-sm text-gray-500">Tienda en línea perfecta para celulares y computadoras, adaptada a tu identidad.</p>
              </div>
            </div>

            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-purple-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-purple-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Panel de Administración</h3>
                <p class="text-sm text-gray-500">Gestiona inventario, pausa productos y monitorea ventas desde cualquier dispositivo.</p>
              </div>
            </div>

            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-green-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-green-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Carga Inicial</h3>
                <p class="text-sm text-gray-500 mb-3">Subimos tus primeros <strong>50 artículos</strong> con variantes para acelerar tu lanzamiento.</p>
                <div class="bg-green-100/50 border border-green-200 rounded-lg p-3">
                  <p class="text-xs text-green-800 leading-relaxed">
                    <strong class="flex items-center gap-1 mb-1">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      Cero Rentas Mensuales:
                    </strong>
                    A diferencia de Shopify, aquí pagas una sola vez y eres dueño de tu sistema.
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-emerald-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-emerald-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Pasarelas de Pago</h3>
                <p class="text-sm text-gray-500">Conexión segura con <strong>Mercado Pago y PayPal</strong> (Tarjetas, transferencias y efectivo).</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- PÁGINA 2 -->
      <div class="hoja-documento">
        <section class="p-6 sm:p-10 bg-slate-50 flex-shrink-0">
          <p class="text-xs text-blue-600 font-bold uppercase tracking-wider mb-6">Alcance del Proyecto (Continuación)</p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-8">
            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-orange-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-orange-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Logística Híbrida</h3>
                <p class="text-sm text-gray-500">Opciones integradas para recolección física en tienda y envíos locales.</p>
              </div>
            </div>

            <div class="bg-white p-4 sm:p-6 rounded-lg sm:rounded-2xl shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
              <div class="bg-pink-50 p-2 sm:p-3 rounded-lg sm:rounded-xl text-pink-500 shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-800 mb-1">Capacitación</h3>
                <p class="text-sm text-gray-500">Sesión en vivo de 1 hr + manuales para gestionar pedidos y subir el resto a tu ritmo.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="p-6 sm:p-10 border-t border-gray-100 flex-grow bg-white">
          <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-6 sm:mb-8 mt-2 sm:mt-4">Inversión del Proyecto</h2>

          <div class="mb-6 sm:mb-10 bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-lg sm:rounded-2xl p-4 sm:p-8 relative shadow-sm">
            <div class="absolute top-0 right-0 bg-purple-600 text-white text-[10px] sm:text-xs font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-bl-lg sm:rounded-bl-xl rounded-tr-lg sm:rounded-tr-2xl uppercase tracking-wider">
              Oferta Exclusiva 2026
            </div>
            <div class="flex gap-3 sm:gap-4 items-start mt-2">
              <div class="bg-white p-2 sm:p-3 rounded-full shadow-sm shrink-0 text-purple-600">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                </svg>
              </div>
              <p class="text-gray-700 text-xs sm:text-base leading-relaxed italic pr-2 sm:pr-4">
                "Normalmente este E-commerce tiene una inversión de <span class="line-through text-gray-400 font-semibold">$18,500 MXN</span>. Sin embargo, estamos abriendo nuestro portafolio 2026. como vienes recomendado, quiero ofrecerte entrar a nuestro programa de <strong>'Casos de Éxito'</strong>. Te ofrezco un precio preferencial de <strong class="text-blue-600 text-lg">{{ data.price }} MXN</strong>. A cambio, solo te pediré un testimonio en video de 30s al terminar."
              </p>
            </div>
          </div>

          <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center">
            <div class="bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl w-full lg:w-1/2 relative border border-purple-600">
              <div class="absolute top-0 right-0 bg-blue-600 text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-3xl uppercase tracking-wider">
                Precio Especial
              </div>
              <h3 class="text-xl font-medium text-slate-300 mb-1">Paquete Base</h3>
              <div class="flex items-baseline gap-1 mb-6">
                <span class="text-3xl font-bold text-blue-400">$</span>
                <span class="text-5xl font-bold">{{ data.price }}</span>
                <span class="text-sm text-slate-400">MXN</span>
              </div>
              <ul class="text-sm text-slate-300 space-y-3">
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Diseño e integraciones
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Carga de <strong>50 productos</strong>
                </li>
                <li class="flex items-center gap-2">
                  <svg class="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Capacitación al equipo
                </li>
              </ul>
            </div>

            <div class="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-dashed border-gray-200 w-full lg:w-1/2 flex flex-col justify-center">
              <h3 class="text-base sm:text-lg font-medium text-gray-500 mb-3">¿Quieres que lo hagamos todo?</h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6">Si deseas que nuestro equipo se encargue de la captura manual de los <strong>200 productos completos</strong>.</p>
              <div class="mt-auto">
                <p class="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-1">Inversión Total</p>
                <div class="flex items-baseline gap-1">
                  <span class="text-xl font-bold text-gray-400">$</span>
                  <span class="text-3xl font-bold text-gray-800">{{ data.price + 10000 }}</span>
                  <span class="text-sm text-gray-500">MXN</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- PÁGINA 3 -->
      <div class="hoja-documento">
        <section class="p-6 sm:p-10 bg-gray-50 flex-grow flex flex-col justify-center">
          <h2 class="text-2xl sm:text-3xl font-bold text-center text-slate-900 mb-8 sm:mb-16">Tiempos y Forma de Trabajo</h2>

          <div class="relative max-w-lg mx-auto w-full">
            <div class="flex gap-4 sm:gap-8 relative step-line pb-12 sm:pb-16">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xl sm:text-2xl relative z-10 shrink-0 shadow-lg">
                1
              </div>
              <div class="pt-1">
                <h4 class="font-bold text-base sm:text-xl text-slate-900">Anticipo y Arranque</h4>
                <p class="text-gray-600 text-sm sm:text-base mt-2">
                  <strong>Pago del 50%</strong> para iniciar la arquitectura y el diseño. Entrega por tu parte de logotipos y las
                  primeras 50 fotografías.
                </p>
              </div>
            </div>

            <div class="flex gap-4 sm:gap-8 relative step-line pb-12 sm:pb-16">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center relative z-10 shrink-0 shadow-lg">
                <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="pt-1">
                <h4 class="font-bold text-base sm:text-xl text-slate-900">Desarrollo</h4>
                <p class="text-gray-600 text-sm sm:text-base mt-2">Tiempo estimado de construcción: <strong>4 a 5 semanas</strong> a partir de la recepción de todos los activos.</p>
              </div>
            </div>

            <div class="flex gap-4 sm:gap-8 relative step-line">
              <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center relative z-10 shrink-0 shadow-lg">
                <svg class="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div class="pt-1">
                <h4 class="font-bold text-base sm:text-xl text-slate-900">Entrega y Finiquito</h4>
                <p class="text-gray-600 text-sm sm:text-base mt-2">
                  <strong>Pago del 50% restante</strong> a contra-entrega, con tu tienda en línea probada, capacitada y lista para
                  vender.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer class="bg-slate-900 text-center p-6 sm:p-12 flex-shrink-0">
          <h3 class="text-white font-semibold text-lg sm:text-2xl mb-6 sm:mb-8">¿Listo para llevar tu negocio al siguiente nivel?</h3>
          <div class="bg-blue-600/20 border border-blue-600/50 text-blue-400 font-bold py-4 px-12 rounded-full inline-block text-lg">
            Autorizar Propuesta
          </div>
        </footer>
      </div>
    </main>
  </div>
</template>

<style scoped>
.escritorio-virtual {
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
}

.hoja-documento {
  width: 794px !important;
  height: 1122px !important;
  min-width: 794px !important;
  max-width: 794px !important;
  min-height: 1122px !important;
  max-height: 1122px !important;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: relative;
  flex-shrink: 0;
}

.step-line::after {
  content: '';
  position: absolute;
  top: 24px;
  left: 50%;
  width: 2px;
  height: calc(100% - 24px);
  background-color: #cbd5e1;
  z-index: 0;
}
.step-line:last-child::after {
  display: none;
}

:global(.pdf-exporting) {
  padding: 0 !important;
  margin: 0 !important;
  align-items: flex-start !important;
}

:global(.pdf-exporting) .hoja-documento {
  width: 794px !important;
  height: 1122px !important;
  min-width: 794px !important;
  max-width: 794px !important;
  margin-bottom: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  border: none !important;
  page-break-after: always;
  font-size: 16px;
}

@media (max-width: 1024px) {
  .hoja-documento {
    width: 100% !important;
    height: auto !important;
    min-width: 100% !important;
    max-width: 100% !important;
    min-height: auto !important;
    max-height: none !important;
    border-radius: 1rem;
    margin-bottom: 1rem;
    font-size: 14px;
  }

  .escritorio-virtual {
    padding-bottom: 1rem;
    padding-left: 0;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .hoja-documento {
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
    font-size: 13px;
    box-shadow: 0 10px 25px -12px rgba(0, 0, 0, 0.15);
  }
}

/* Optimización para pantallas muy pequeñas (móviles) */
@media (max-width: 480px) {
  .hoja-documento {
    border-radius: 0;
    margin-bottom: 0;
    font-size: 12px;
    box-shadow: 0 5px 15px -12px rgba(0, 0, 0, 0.1);
  }

  .escritorio-virtual {
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
  }

  /* Ajustes de padding para móvil */
  .hoja-documento :deep(header) {
    padding: 1rem !important;
  }

  .hoja-documento :deep(section) {
    padding: 1rem !important;
  }

  .hoja-documento :deep(footer) {
    padding: 1rem !important;
  }

  /* Grid de 1 columna en móvil */
  .hoja-documento :deep(.grid-cols-2) {
    grid-template-columns: 1fr !important;
    gap: 1rem !important;
  }

  /* Textos más pequeños */
  .hoja-documento :deep(h1) {
    font-size: 1.5rem !important;
  }

  .hoja-documento :deep(h2) {
    font-size: 1.25rem !important;
  }

  .hoja-documento :deep(h3) {
    font-size: 0.95rem !important;
  }

  .hoja-documento :deep(p) {
    font-size: 0.85rem !important;
  }
}

@media (max-width: 320px) {
  .hoja-documento :deep(h1) {
    font-size: 1.25rem !important;
  }

  .hoja-documento :deep(h2) {
    font-size: 1.1rem !important;
  }
}
</style>
