import { ICar } from './car.Interface';
import CarData from './car.model';

const createCar = async (data: ICar) => {
  const existingCar = await CarData.findOne({
    brand: data.brand,
    model: data.model,
  });
  if (existingCar) {
    throw new Error('Car with the same brand and model already exists.');
  }
  const result = await CarData.create(data);

  return result;
};

const getAllCars = async (searchTerm: string) => {
  const query: any = {};
  if (searchTerm) {
    query.$or = [
      { brand: { $regex: searchTerm } },
      { model: { $regex: searchTerm } },
      { category: { $regex: searchTerm } },
    ];
  }

  const result = await CarData.find(query).sort({ createdAt: -1 });
  return result;
};

const getSingleCar = async (id: string) => {
  const result = await CarData.findById(id);
  return result;
};

const updateCar = async (id: string, data: ICar) => {
  const result = await CarData.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteCar = async (id: string) => {
  const result = await CarData.findByIdAndDelete(id);
  return result;
};

export const carService = {
  createCar,
  getAllCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
