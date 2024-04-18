//Axios is a promise-based HTTP Client for node.js and the browser.
// It is isomorphic (= it can run in the browser and nodejs with the same codebase).
// On the server-side it uses the native node.js http module,
// while on the client (browser) it uses XMLHttpRequests.
import axios from 'axios';
// url of backend server
const url="http://localhost:8000";

// creating function which can be use for API calling.
// data is body of api which comes from back i.e. from where we will be calling addUser function in client side in loginDialogBox.jsx file
// data come from google login data from loginDialogBox.jsx file
export const addRecord=async (data)=>{
    try{
        // calling API
        // hitting post request to server so that we can store our data in database
       await axios.post(`${url}/addrecord`,data);
    } catch(error){
        console.log("error while addRecord API ",error.message);
    }
}

export const getRecord=async ()=>{
    try{
        // calling API
        // hitting get request to server so that we can retrieve our data in from database to display to screen
        let response =await axios.get(`${url}/getrecord`);
        return response.data;
    } catch(error){
        console.log("error while calling getRecord api ", error.message);
    }
}

 