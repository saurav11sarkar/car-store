import { Request, Response } from 'express';
import { orderServer } from './order.services';
import orderValidation from './order.validation';

const createCar = async (req: Request, res: Response): Promise<any> => {
  try {
    const { data } = req.body;

    const dataValidation: any = orderValidation.parse(data);

    // Call the service
    const result = await orderServer.createOrder(dataValidation);

    // Send appropriate response
    if (result.success) {
      return res.status(201).json({
        success: true,
        message: 'Order created successfully',
        data: result.data,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: result.message,
        error: result.error,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: error.message,
    });
  }
};

const getRevenue = async (req: Request, res: Response): Promise<void> => {
  try {
    const totalRevenue = await orderServer.calcuateTotalRevenue();
    res.status(200).json({
      success: true,
      message: 'Total revenue calculated successfully',
      totalRevenue,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate revenue',
      error: error.message,
    });
  }
};

export const orderController = {
  createCar,
  getRevenue,
};
