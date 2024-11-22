# Car Store Application

A TypeScript-based **Express.js** application for managing a car store. It provides CRUD operations for managing cars, placing orders, and tracking revenue. The application integrates **MongoDB** with **Mongoose** for schema validation.

# Here’s how these packages are used in a car store project:

1. **cors**:  
   Enables **Cross-Origin Resource Sharing (CORS)**, allowing your server to handle requests from different domains securely.

2. **dotenv**:  
   Loads environment variables from a `.env` file into `process.env`, keeping sensitive configurations like database URLs secure and manageable.

3. **express**:  
   A lightweight and fast **web framework** for Node.js, used to build APIs and handle HTTP requests/responses.

4. **mongoose**:  
   A **MongoDB object modeling library** that simplifies data interaction by providing schemas, validation, and query helpers.

5. **zod**:  
   A **TypeScript-first validation library** for building schemas to validate and parse data inputs, ensuring your application receives clean and predictable data.

---

## Features

- **Manage Cars**: Perform CRUD operations on car inventory.
- **Place Orders**: Create and manage car purchase orders.
- **Revenue Calculation**: Calculate total revenue from all orders using the MongoDB aggregation pipeline.
- **MongoDB Integration**: Schema validation and data persistence using Mongoose.

---

## Live Server and Code Repository

- **Live Application**: [Car Store Live on Vercel](https://car-store-one-brown.vercel.app/)
- **GitHub Repository**: [Car Store GitHub Repository](https://github.com/saurav11sarkar/car-store.git)

---

## Data Formats

### Car Data Format (POST Request)
```json
{
    "data": {
        "brand": "Chevrolet",
        "model": "Corvette",
        "year": 2023,
        "price": 27000,
        "category": "Coupe",
        "description": "A high-performance sports car.",
        "quantity": 30,
        "inStock": false
    }
}
```

### Order Data Format (POST Request)
```json
{
    "data": {
        "email": "buyer4@example.com",
        "car": "67402205019cb2df2c5c130d",
        "quantity": 4,
        "totalPrice": 80000
    }
}
```

---

## API Endpoints and Documentation

### **1. Cars**
Manage car inventory with the following endpoints:

- **Create a Car**:  
  **POST** `/api/cars/`  
  [Link](https://car-store-one-brown.vercel.app/api/cars/)

- **Get All Cars**:  
  **GET** `/api/cars/`  
  [Link](https://car-store-one-brown.vercel.app/api/cars/)  
  **Query Support**: Search cars by brand, model, or category using:  
  `/api/cars/?searchTerm=(brand)|(model)|(category)`  
  Example: [Search "Toyota"](https://car-store-one-brown.vercel.app/api/cars/?searchTerm=Toyota)

- **Get a Single Car**:  
  **GET** `/api/cars/:carId`  
  Example: [Single Car](https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d)

- **Update a Car**:  
  **PUT** `/api/cars/:carId`  
  Example: [Update Car](https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d)

- **Delete a Car**:  
  **DELETE** `/api/cars/:carId`  
  Example: [Delete Car](https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d)

---

### **2. Orders**
Place and manage orders with these endpoints:

- **Create an Order**:  
  **POST** `/api/orders`  
  [Link](https://car-store-one-brown.vercel.app/api/orders)

- **Calculate Total Revenue**:  
  **GET** `/api/orders/revenue`  
  [Link](https://car-store-one-brown.vercel.app/api/orders/revenue)  
  - Uses MongoDB aggregation pipeline and Mongoose hooks to calculate revenue.
  - **Logic**:  
    Total price = Car price × Quantity ordered  
    Total revenue = Sum of all total prices.

---

This README file provides a clear structure for understanding your application's purpose, features, and usage. It also aligns with standard documentation practices for web applications.