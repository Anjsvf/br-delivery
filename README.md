# BR_delivery

https://github.com/user-attachments/assets/eeacb8ff-b7fd-424c-b9d6-fac0c60bb073
# Food Delivery App - Frontend

This repository contains the frontend codebase for a food delivery application built using React. It allows users to browse a menu, add items to their cart, place orders, and track delivery.

## Features

- **User Authentication**: Secure login and registration functionality.
- **Shopping Cart**: Users can add and remove items from their cart.
- **Order Placement**: Seamless order placement with real-time updates.
- **Payment Processing**: Integration with Stripe for secure payments.
- **Order Tracking**: Users can view their order history and track current orders.

## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **React Router**: For handling navigation within the application.
- **Axios**: HTTP client for making requests to the backend API.
- **Bootstrap**: CSS framework for responsive design.
- **Stripe.js**: Stripe's JavaScript library for payment integration.

## Setup Instructions

1. **Clone the repository:**
2. 
2. **Install dependencies:**

3. **Set up environment variables:**
- Create a `.env` file in the root directory.
- Define the following variables:
  ```
  REACT_APP_BACKEND_URL=http://localhost:5000/api
  REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
  ```

4. **Start the development server:**

5. **Open your browser and go to `http://localhost:3000` to view the application.**

## Folder Structure

- **`src/components/`**: Contains reusable UI components.
- **`src/pages/`**: React components for different application views.
- **`src/services/`**: Functions for making API requests using Axios.
- **`src/utils/`**: Utility functions and constants.

## Screenshots

Include screenshots of the application interface to give users a visual preview.

## Deployment

- **Deployment**: Deployed on **Render**.

## Contributing

- Contributions are welcome! Fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

# Food Delivery App - Backend

This repository contains the backend codebase for a food delivery application built using Node.js, Express, MongoDB (Mongoose), and integrating with Stripe for payment processing.

## Features

- **Authentication**: Secure JWT-based login and registration for users.
- **Cart Operations**: Add, remove, and retrieve items from the shopping cart.
- **Food Operations**: CRUD functionality for managing food items.
- **Order Management**: Place orders, update order status, and track payments.
- **Stripe Integration**: Payment processing with webhook support using Stripe.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Tokens for authentication.
- **Stripe API**: Payment processing and webhooks for order verification.

## Setup Instructions

1. **Clone the repository:**

2. **Install dependencies:**

3. **Set up environment variables:**
- Create a `.env` file in the root directory.
- Define the following variables:
  ```
  PORT=5000
  MONGODB_URI=mongodb+srv://your-mongodb-uri
  JWT_SECRET=your_jwt_secret
  STRIPE_SECRET_KEY=your_stripe_secret_key
  ```

4. **Start the server:**
5. **The backend server will run on `http://localhost:5000`.**

## Folder Structure

- **`src/controllers/`**: Logic for handling HTTP requests and responses.
- **`src/models/`**: Mongoose schema definitions for MongoDB.
- **`src/routes/`**: Express routes defining API endpoints.
- **`src/middleware/`**: Custom middleware functions for authentication.
- **`src/config/`**: Configuration files including environment variables.

## API Endpoints

Document the available API endpoints and their functionality:

- **Authentication**: `/api/users/register`, `/api/users/login`
- **Cart Operations**: `/api/cart/add`, `/api/cart/remove`, `/api/cart/get`
- **Food Operations**: `/api/food/add`, `/api/food/list`, `/api/food/remove`
- **Order Operations**: `/api/orders/place`, `/api/orders/verify`, `/api/orders/userorders`, `/api/orders/list`, `/api/orders/status`

## Deployment

- **Deployment**: Deployed on **Render**.

## Contributing

- Contributions are welcome! Fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.




