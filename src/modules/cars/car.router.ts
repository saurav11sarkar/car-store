import express from 'express';
import { carController } from './car.controller';
const carRoute = express.Router();

// CURD opration
carRoute.post('/', carController.createCar);
carRoute.get('/:carId', carController.getSingleCar);
carRoute.put('/:carId', carController.updateCar);
carRoute.delete('/:carId', carController.deleteCar);
carRoute.get('/', carController.getAllCars);

export default carRoute;
