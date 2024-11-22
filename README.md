# Car Store Application

## A TypeScript-based Express application for managing a car store.

## Features

- Manage Cars (CRUD operations)
- Place Orders for Cars
- MongoDB integration with Mongoose for schema validation.

## server Live vercel Link -> (https://car-store-one-brown.vercel.app/)

## Data formet:
- cars data formet post data create
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

- order data formet post data create

{
    "data": {
        "email": "buyer4@example.com",
        "car": "67402205019cb2df2c5c130d",
        "quantity": 4,
        "totalPrice": 80000
    }
}

## Router name and link and some explen:

# 1. Cars ->
- post create data car (/api/cars/). link-> (https://car-store-one-brown.vercel.app/api/cars/).

- get All data cars & use query (/api/cars/) . link ->(https://car-store-one-brown.vercel.app/api/cars/).
   - Query (/api/cars/?searchTerm=(brand name)|(model name)|(category name)). link -> (https://car-store-one-brown.vercel.app/api/cars/?searchTerm=Toyota).

- get singl edata car (/api/cars/:carId). link -> (https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d).

- put updat edata car (/api/cars/:carId). link -> (https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d).

- delete delete data car (/api/cars/:carId). link -> (https://car-store-one-brown.vercel.app/api/cars/67402205019cb2df2c5c130d).

# 2. Orders ->
- post create order data (/api/orders) . link -> (https://car-store-one-brown.vercel.app/api/orders).

- get Calculate Revenue from Orders (/api/orders/revenue). link -> (https://car-store-one-brown.vercel.app/api/orders/revenue)
  - Use MongoDB aggregation pipeline and mongoose hook (pre) use to calculate the total revenue from all orders.
  - Calculate the total price by multiplying the price of each car by the quantity ordered.
  - Then the sum total revenue from all orders.


