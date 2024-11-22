import { Request, Response } from 'express';
import carValidation from './car.validation';
import { carService } from './car.services';

const createCar = async (req: Request, res: Response): Promise<any> => {
  try {
    const { data } = req.body;
    const dataValidation = carValidation.parse(data);
    const result = await carService.createCar(dataValidation);

    res.status(201).json({
      message: 'Car created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      status: false,
      message: error.message || 'Validation failed',
      error: error.errors ? error.errors[0].message : null,
    });
  }
};

const getAllCars = async (req: Request, res: Response) => {
  try {
    const searchTerm: string = (req.query.searchTerm as string) || '';
    const result = await carService.getAllCars(searchTerm);
    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Error retrieving cars',
      error: error.message,
    });
  }
};

const getSingleCar = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.carId;
    if (!id) {
      return res.status(400).json({
        status: false,
        message: 'Car ID is required',
      });
    }
    const result = await carService.getSingleCar(id);
    if (!result) {
      return res.status(404).json({
        status: false,
        message: 'Not found',
      });
    }
    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Error retrieving cars',
      error: error.message,
    });
  }
};

const updateCar = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.carId;
    const { data } = req.body;
    const dataValidation = carValidation.parse(data);
    const result = await carService.updateCar(id, dataValidation);
    if (!result) {
      return res.status(404).json({
        status: false,
        message: 'Not found',
      });
    }
    res.status(201).json({
      message: 'Car updated successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Error retrieving cars',
      error: error.message,
    });
  }
};
const deleteCar = async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.carId;
    const result = await carService.deleteCar(id);
    if (!result) {
      return res.status(404).json({
        status: false,
        message: 'Not found',
      });
    }
    res.status(201).json({
      message: 'Car deleted successfully',
      status: true,
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Error retrieving cars',
      error: error.message,
    });
  }
};

export const carController = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
