import { z } from 'zod';

const orderValidation = z.object({
  email: z.string().email(),
  car: z.string(),
  quantity: z.number().int().positive(),
  totalPrice: z.number().nonnegative(),
});

export default orderValidation;
