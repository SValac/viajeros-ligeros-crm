import { z } from 'zod';

export const CamionSchema = z.object({
  plate: z.string().min(1, 'La placa es requerida'),
  brand: z.string().min(1, 'La marca es requerida'),
  capacity: z.number().min(1, 'La capacidad es requerida'),
  model: z.number().min(1990, 'El año debe ser mayor a 1990').max(new Date().getFullYear(), 'El modelo es inválido'),
  chofer1Id: z.string().min(1, 'El chofer principal es requerido'),
  chofer2Id: z.string().optional(),
});
export type Camion = z.infer<typeof CamionSchema>;

export const ChoferSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  licenseNumber: z.string().min(1, 'El número de licencia es requerido'),
  phone: z.string().min(1, 'El teléfono es requerido'),
});
export type Chofer = z.infer<typeof ChoferSchema>;

export const ClienteSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  contactPerson: z.string().min(1, 'La persona de contacto es requerida'),
});
export type Cliente = z.infer<typeof ClienteSchema>;
