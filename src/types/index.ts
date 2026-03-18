/**
 * Tipos de datos para cotizaciones
 */

export interface Cotizacion {
  id: string
  numero: string
  cliente: string
  fecha: Date
  vencimiento: Date
  items: CotizacionItem[]
  total: number
  estado: 'borrador' | 'enviada' | 'aceptada' | 'rechazada'
}

export interface CotizacionItem {
  id: string
  descripcion: string
  cantidad: number
  precioUnitario: number
  subtotal: number
}

export interface Cliente {
  id: string
  nombre: string
  email: string
  telefono: string
  empresa: string
  direccion: string
}
