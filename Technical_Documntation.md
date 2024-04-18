# Website Technical Documentation

This documentation provides an overview of the architecture, functionality, and flow of the website, including both the client-side and server-side components.

## Client-Side Application

### File Structure

The client-side application follows a typical React project structure:

- **public/**: Directory containing the static assets and HTML template.
- **src/**: Directory containing the React components, styles, and other source files.
  - **components/**: Directory containing reusable React components.
  - **img/**: Directory containing image assets used in the application.
  - **service/**: Directory containing API service files for making HTTP requests to the server.
  - **App.js**: Main component file serving as the entry point of the application.
  - **index.js**: File for rendering the root component and mounting it into the HTML template.

### Dependencies Used

The client-side application uses the following dependencies:

- **React**: A JavaScript library for building user interfaces.
- **React Router**: A routing library for React that enables navigation between different components.
- **Axios**: A promise-based HTTP client for making HTTP requests to the server.
- **Styled-components**: A CSS-in-JS library for styling React components with scoped styles.

### Features

The client-side application includes the following features:

- **User Interface**: A user-friendly interface for interacting with the website.
- **Navigation**: Navigation between different pages using React Router.
- **Form Handling**: Input forms for submitting data to the server.
- **Data Display**: Displaying data retrieved from the server in a structured format.
- **Styling**: Styling of components using CSS or styled-components for enhanced aesthetics.

## Server-Side Application

### File Structure

The server-side application follows a modular structure for better organization:

- **index.js**: Main file for setting up the Express server and defining routes.
- **database/**: Directory containing files related to database connection.
  - **db.js**: File for establishing connection to MongoDB database using Mongoose.
- **routes/**: Directory containing route files for defining API endpoints.
  - **route.js**: File for defining routes and handling requests using Express Router.
- **controller/**: Directory containing controller files for handling business logic.
  - **record-controler.js**: File containing functions for adding and retrieving records.
- **Models/**: Directory containing schema models for MongoDB.
  - **record.js**: File defining the schema for recording data.

### Dependencies Used

The server-side application uses the following dependencies:

- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.
- **Cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in Express apps.
- **Axios**: A promise-based HTTP client for making HTTP requests from Node.js.

### Database Connection

The application connects to a MongoDB database hosted on MongoDB Atlas cloud platform using Mongoose.

### Routes and Controllers

Routes are defined in the `routes/route.js` file using Express Router. The API endpoints are mapped to controller functions defined in the `controller/record-controler.js` file.

## Flow of the Website

1. The client-side application sends HTTP requests to the server-side application using Axios.
2. The server-side application receives the requests, processes them, and interacts with the MongoDB database using Mongoose.
3. Data is retrieved from or stored in the database based on the request type.
4. The server-side application sends back the response to the client-side application.
5. The client-side application receives the response and updates the user interface accordingly.
