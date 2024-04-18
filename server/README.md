# Server-side Application Technical Documentation

This documentation provides an overview of the server-side application architecture, including the file structure, dependencies, and functionality.

## File Structure

The server-side application consists of the following main files and directories:

- **index.js**: Main file for setting up the Express server and defining routes.
- **database/**: Directory containing files related to database connection.
  - **db.js**: File for establishing connection to MongoDB database using Mongoose.
- **routes/**: Directory containing route files for defining API endpoints.
  - **route.js**: File for defining routes and handling requests using Express Router.
- **controller/**: Directory containing controller files for handling business logic.
  - **record-controler.js**: File containing functions for adding and retrieving records.
- **Models/**: Directory containing schema models for MongoDB.
  - **record.js**: File defining the schema for recording data.

## Dependencies Used

The server-side application uses the following dependencies:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express apps.
- **Axios**: A promise-based HTTP client for making HTTP requests from Node.js.

## Database Connection

The application connects to a MongoDB database hosted on MongoDB Atlas cloud platform. The connection is established using Mongoose, a MongoDB object modeling tool designed to work in an asynchronous environment.

The connection URL is stored in a .env file and accessed using the `dotenv` package to keep sensitive information like database credentials secure.

## Routes and Controllers

Routes are defined in the `routes/route.js` file using Express Router. The API endpoints are mapped to controller functions defined in the `controller/record-controler.js` file.

- **addRecord**: Endpoint for adding a new record to the database. Handled by the `addRecord` function in the controller.
- **getRecord**: Endpoint for retrieving all records from the database. Handled by the `getRecord` function in the controller.

## Running the Server

To run the server-side application:

1. Install dependencies using `npm install`.
2. Start the server using `npm start`.
3. The server will be running on the specified port, defaulting to port 8000.

