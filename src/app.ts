import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import config from './config';
import carRoute from './modules/cars/car.router';
import orderRouter from './modules/orders/order.router';

const app = express();

// medleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// router
app.use('/api/cars', carRoute);
app.use('/api/orders', orderRouter);

// page Error Handeler
app.use((_req: Request, res: Response, _next: NextFunction) => {
  res.status(400).json({
    success: false,
    message: 'This page is not create',
  });
});

// server Error handeler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({
    message: err.message || 'Internal Server Error',
    success: false,
    error: err,
    stack: config.NODE_ENV === 'production' ? null : err.stack,
  });
});

export default app;
