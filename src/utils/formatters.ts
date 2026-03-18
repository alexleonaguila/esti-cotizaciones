/**
 * Utilidades para formatear números y moneda
 */

export function formatearMoneda(valor: number, moneda = 'MXN'): string {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: moneda,
  }).format(valor)
}

export function formatearFecha(fecha: Date): string {
  return new Intl.DateTimeFormat('es-MX').format(fecha)
}

export function formatearPorcentaje(valor: number): string {
  return `${(valor * 100).toFixed(2)}%`
}
