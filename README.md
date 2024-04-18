<img width="959" alt="website_view" src="https://github.com/anupkumar1814/Medical_Records/assets/115176086/4605781c-4851-4685-869b-821b883c12cb">


# Steps for Cloning and Running the GitHub Project on localhost system

This guide provides step-by-step instructions for cloning the GitHub project and running it on another system.

## Prerequisites

Before proceeding, ensure that the following software is installed on the target system:

- Node.js and npm (Node Package Manager)
- MongoDB 

## Steps

1. **Clone the Repository:**
   - Open a terminal or command prompt.
   - Use the `git clone` command to clone the GitHub repository to the desired location on the system.
    `git clone <repository_url>`
   - Replace `<repository_url>` with the URL of the GitHub repository.

2. **Install Dependencies:**
   - Navigate to the project directory using the terminal or command prompt.
   
   - first navigate to client folder using the terminal or command prompt
        Run the following command to install the project dependencies specified in the `package.json` file:
         command   ->   `npm install`

   - then navigate to server folder using the terminal or command prompt
        Run the following command to install the project dependencies specified in the `package.json` file:
         command   ->   `npm install`


3. **Database Setup (if applicable):**
   - This project uses mongoDb database (AWS service).
   - So first create your own cluster on mongodb for this project.
   - Modify the database connection URL (username,password) in the db.js file in server folder inside    database folder.
   - Start the cluster on mongodb
   - allow all the IP address.

4. **Environment Variables :**
   - change mongodb username and password to our own credentials in .env file in server side.

5. **Start the Server:**
   - Once the dependencies are installed and the database is set up, start the server by running the following command inside the server folder:
    command -> `npm start`
   - Then navigate to client folder in different terminal and start the clent side by running the following command inside the client folder:
    comand  -> `npm start`
   - This will open the website on localhost on default browser or you can type url `http://localhost:3000/` in browser if it doesnt open automatically
   
