import CarData from '../cars/car.model';
import OrderData from './order.model';
import { IOrder } from './order.interface';

// Create an order
const createOrder = async (order: IOrder) => {
  try {
    const { email, car: carId, quantity, totalPrice } = order;
    const car = await CarData.findById(carId);
    if (!car) {
      return {
        success: false,
        message: 'Car not found',
      };
    }

    if (car.quantity < quantity) {
      return {
        message: 'Insufficient stock',
        success: false,
        error: { availableStock: car.quantity },
      };
    }

    car.quantity -= quantity;

    if (car.quantity === 0) {
      car.inStock = false;
    }
    await car.save();

    const newOrder = await OrderData.create({
      email,
      car: carId,
      quantity,
      totalPrice,
    });

    return {
      message: 'Order created successfully',
      success: true,
      data: newOrder,
    };
  } catch (error: any) {
    return {
      message: 'Failed to create order',
      success: false,
      error: error.message,
    };
  }
};

const calcuateTotalRevenue = async () => {
  try {
    const result = await OrderData.aggregate([
      {
        $lookup: {
          from: 'cardatas',
          localField: 'car',
          foreignField: '_id',
          as: 'carDetails',
        },
      },
      {
        $unwind: '$carDetails',
      },
      {
        $group: {
          _id: null,
          totalRevenue: {
            $sum: { $multiply: ['$quantity', '$carDetails.price'] },
          },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    return result.length ? result[0].totalRevenue : 0;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const orderServer = {
  createOrder,
  calcuateTotalRevenue,
};
