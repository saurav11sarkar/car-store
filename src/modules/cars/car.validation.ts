import { z } from 'zod';

const carValidation = z.object({
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .number()
    .int()
    .gte(1886, 'Year must be 1886 or later')
    .lte(new Date().getFullYear(), 'Year cannot be in the future'),
  price: z.number().positive('Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    message: 'Invalid category',
  }),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().gte(0, 'Quantity cannot be negative'),
  inStock: z.boolean(),
});

export default carValidation;
