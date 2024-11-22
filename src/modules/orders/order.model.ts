import mongoose from 'mongoose';
import { IOrder } from './order.interface';

const orderSchema = new mongoose.Schema<IOrder>(
  {
    email: { type: String, required: true, unique: true },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'CarData',
      required: true,
    },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  { timestamps: true },
);

orderSchema.pre('save', async function (next) {
  const car = await mongoose.model('CarData').findById(this.car);
  if (!car) {
    return next(new Error('Car not found'));
  }
  this.totalPrice = car.price * this.quantity;
  next();
});

const OrderData = mongoose.model<IOrder>('OrderData', orderSchema);

export default OrderData;
