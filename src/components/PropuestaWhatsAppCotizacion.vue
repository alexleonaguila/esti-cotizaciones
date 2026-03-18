<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
    <!-- Header -->
    <div class="max-w-4xl mx-auto mb-8">
      <div class="text-center mb-8">
        <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          📄 Propuesta Comercial
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 font-semibold">
          Sistema de Apartado por WhatsApp
        </p>
      </div>

      <!-- Cliente & Agencia Info -->
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Cliente
            </h3>
            <p class="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {{ clientName }}
            </p>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Agencia
            </h3>
            <p class="text-xl font-bold text-slate-900 dark:text-white mt-1">
              {{ agencyName }}
            </p>
          </div>
        </div>
      </div>

      <!-- Saludo & Introducción -->
      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-lg p-6 sm:p-8 mb-8 border-l-4 border-blue-500">
        <p class="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed mb-4">
          <span class="font-semibold">¡Hola, {{ clientFirstName }}!</span> Es un placer confirmar nuestro acuerdo. 
          Entendiendo la dinámica de tu boutique, hemos estructurado la solución tecnológica perfecta para ti:
        </p>
        <p class="text-base sm:text-lg text-slate-700 dark:text-slate-200 font-semibold text-blue-700 dark:text-blue-300">
          Un Catálogo Inteligente con Sistema de Apartado por WhatsApp.
        </p>
        <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 mt-4">
          Esta opción te da una presencia digital premium, cero costos de rentas mensuales de plataformas y la flexibilidad 
          de actualizar tu catálogo solo cuando tú lo decidas.
        </p>
      </div>
    </div>

    <!-- Fase 1: Desarrollo -->
    <div class="max-w-4xl mx-auto mb-8">
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <!-- Header de Fase -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white">
            1️⃣ Desarrollo de la Plataforma
          </h2>
          <p class="text-blue-100 mt-2">(Fase Inicial)</p>
        </div>

        <!-- Contenido -->
        <div class="p-6 sm:p-8">
          <p class="text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
            Diseñaremos una vitrina digital rápida y optimizada para celulares. Tus clientes podrán ver tu ropa y, 
            con un solo clic, el sistema los enviará a tu WhatsApp con un mensaje pre-escrito indicando qué prenda 
            desean apartar o comprar.
          </p>

          <!-- Sub-items Grid -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="font-semibold text-slate-900 dark:text-white mb-2">🎨 Diseño UX/UI</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Catálogo visual 100% personalizado con la identidad de {{ clientFirstName }} Boutique.
              </p>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg p-4 border-l-4 border-green-500">
              <p class="font-semibold text-slate-900 dark:text-white mb-2">⚡ Hospedaje de Alta Velocidad</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Tu página vivirá en servidores seguros. <span class="font-bold text-green-700 dark:text-green-400">Costo de servidor: $0 de por vida.</span>
              </p>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg p-4 border-l-4 border-purple-500">
              <p class="font-semibold text-slate-900 dark:text-white mb-2">📦 Carga Inicial VIP</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Para tu gran lanzamiento, nosotros estructuraremos y subiremos tus primeros 50 artículos con sus fotos, tallas y precios.
              </p>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 rounded-lg p-4 border-l-4 border-orange-500">
              <p class="font-semibold text-slate-900 dark:text-white mb-2">💬 Integración WhatsApp</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Botones inteligentes en cada producto (Ej. "Hola Eduard Boutique, quiero apartar el Vestido Rojo, talla M").
              </p>
            </div>
          </div>

          <!-- Inversión -->
          <div class="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6 border-2 border-blue-300 dark:border-blue-500">
            <p class="font-bold text-slate-900 dark:text-white text-lg mb-3">💵 Inversión de Desarrollo</p>
            <p class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">$5,500 MXN</p>
            <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-2">
              <span class="font-semibold">Pago único</span> • Esquema: 50% de anticipo para arrancar, 50% al entregar la plataforma en línea.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Fase 2: Actualizaciones -->
    <div class="max-w-4xl mx-auto mb-8">
      <div class="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <!-- Header de Fase -->
        <div class="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 sm:p-8">
          <h2 class="text-2xl sm:text-3xl font-bold text-white">
            2️⃣ Póliza de Actualización Flexible
          </h2>
          <p class="text-indigo-100 mt-2">(Pago por Evento)</p>
        </div>

        <!-- Contenido -->
        <div class="p-6 sm:p-8">
          <p class="text-slate-700 dark:text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
            Sabemos que la moda cambia por temporadas. Para que no pagues mensualidades forzosas cuando no tienes mercancía nueva, 
            trabajaremos bajo un modelo <span class="font-semibold">"Bajo Demanda"</span>. Nosotros seremos tu equipo técnico externo.
          </p>

          <!-- ¿Cómo funciona? -->
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800 rounded-lg p-6 mb-6 border-l-4 border-indigo-500">
            <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">¿Cómo funciona?</h3>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
              Cuando te llegue una nueva colección, simplemente nos envías las fotografías y los precios por WhatsApp o correo. 
              Nosotros nos encargamos de programarlos, optimizar las imágenes y subirlos a la página.
            </p>
          </div>

          <!-- Esquema de Inversión -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div class="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900 dark:to-teal-800 rounded-lg p-6 border-2 border-teal-400 dark:border-teal-500">
              <p class="font-bold text-slate-900 dark:text-white text-2xl mb-2">$500 MXN</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Por cada paquete de hasta 40 productos nuevos.
              </p>
            </div>

            <div class="bg-gradient-to-br from-lime-50 to-lime-100 dark:from-lime-900 dark:to-lime-800 rounded-lg p-6 border-2 border-lime-400 dark:border-lime-500">
              <p class="font-bold text-slate-900 dark:text-white mb-2">💡 La Ventaja</p>
              <p class="text-sm text-slate-700 dark:text-slate-300">
                Tú decides cuándo actualizar. Pagas solo cuando necesitas subir mercancía nueva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tiempos de Entrega -->
    <div class="max-w-4xl mx-auto mb-8">
      <div class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900 rounded-lg p-6 sm:p-8 border-l-4 border-amber-500">
        <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">⏱️ Tiempos de Entrega (Fase 1)</h3>
        <p class="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <span class="font-bold text-amber-700 dark:text-amber-300">De 5 a 7 días hábiles</span> a partir de la recepción del 
          <span class="font-semibold">anticipo del 50% ($2,750 MXN)</span> y el material fotográfico de los 50 productos iniciales.
        </p>
      </div>
    </div>

    <!-- CTA Final -->
    <div class="max-w-4xl mx-auto">
      <div class="bg-gradient-to-r from-emerald-600 to-green-600 dark:from-emerald-700 dark:to-green-700 rounded-lg p-8 text-center text-white shadow-lg">
        <p class="text-lg sm:text-xl font-semibold mb-4">
          ¡Estamos listos para transformar las ventas de {{ clientFirstName }} Boutique!
        </p>
        <p class="text-sm sm:text-base text-emerald-50 mb-6">
          Por favor, confírmame de recibido para compartirte los datos bancarios y enviar el Checklist 
          de los materiales que necesitamos para arrancar.
        </p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button class="bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-emerald-50 transition-colors">
            💬 Contactar por WhatsApp
          </button>
          <button class="bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-emerald-800 border-2 border-white transition-colors">
            📧 Enviar Correo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  clientName?: string
  clientFirstName?: string
  agencyName?: string
}

withDefaults(defineProps<Props>(), {
  clientName: 'Eduard López Sánchez - Eduard Boutique',
  clientFirstName: 'Eduard',
  agencyName: 'ESTI Solutions',
})
</script>

<style scoped>
@apply;
</style>
