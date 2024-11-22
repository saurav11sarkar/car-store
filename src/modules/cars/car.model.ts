import mongoose from 'mongoose';
import { ICar } from './car.Interface';

const carSchema = new mongoose.Schema<ICar>(
  {
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: true,
      trim: true,
    },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, required: true },
  },
  { timestamps: true },
);

const CarData = mongoose.model<ICar>('CarData', carSchema);
export default CarData;
