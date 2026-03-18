<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
    <!-- Navbar -->
    <nav class="bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link to="/" class="text-xl font-bold">
            <span class="text-slate-900">ESTI</span>
            <span class="text-blue-600">Cotizaciones</span>
          </router-link>
          <router-link to="/cotizaciones" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Ver Cotizaciones
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div class="text-center mb-12">
        <h1 class="text-5xl sm:text-7xl font-bold text-white mb-6">
          ESTI Cotizaciones
        </h1>
        <p class="text-xl sm:text-2xl text-slate-300 mb-8">
          Propuestas profesionales para tu negocio
        </p>
        <router-link to="/cotizaciones" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition text-lg font-bold">
          Crear Cotización
        </router-link>
      </div>

      <!-- Features -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Diseño Profesional</h3>
          <p class="text-slate-600">Cotizaciones diseñadas para impresionar a tus clientes con un toque profesional.</p>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m-6 0a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Fácil de Personalizar</h3>
          <p class="text-slate-600">Edita datos, precios y detalles según tus necesidades específicas.</p>
        </div>

        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-900 mb-2">Descarga en PDF</h3>
          <p class="text-slate-600">Exporta tus cotizaciones en PDF listas para compartir con clientes.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Componente Home
</script>

<style scoped></style>
