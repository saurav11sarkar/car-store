import mongoose from 'mongoose';

export interface IOrder {
  email: string;
  car: mongoose.Types.ObjectId;
  quantity: number;
  totalPrice: number;
}
