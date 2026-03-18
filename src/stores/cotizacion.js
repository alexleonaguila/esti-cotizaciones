import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCotizacionStore = defineStore('cotizacion', () => {
  const cotizaciones = ref([])

  function agregarCotizacion(cotizacion) {
    cotizaciones.value.push(cotizacion)
  }

  return {
    cotizaciones,
    agregarCotizacion,
  }
})
