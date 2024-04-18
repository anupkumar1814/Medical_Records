// Import the Recording model
import Recording from "../Models/record.js";

// Function to add a new record
export const addRecord = async (request, response) => {
    try {
        // Create a new record instance with data from the request body
        const newRecord = new Recording(request.body);
        // Save the new record to the database
        await newRecord.save();
        // Send a success response with the new record data
        response.status(200).json(newRecord);
    } catch (error) {
        // If an error occurs, send a 500 status response with the error message
        return response.status(500).json(error.message);
    }
}

// Function to get all records
export const getRecord = async (request, response) => {
    try {
        // Find all records in the database
        const record = await Recording.find();
        // Send a success response with the records data
        return response.status(200).json(record);
    } catch (error) {
        // If an error occurs, send a 500 status response with the error message
        return response.status(500).json(error.message);
    }
}
