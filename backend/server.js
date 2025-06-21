/* STEP 1: SET UP THE .JS SERVER. CREATE CONNECT.JS, CONFIG.ENV, DOTENV (FOR HIDING PASSWORDS) AND SET UP PROPER FOLDER STRUCTURE. 
            USE THE TERMINAL TO DOWNLOAD NPM, NODE, AND EXPRESS. SET UP GIT
*/ 
const connect = require("./connect.js")
const express = require("express")
const cors = require("cors")

// Create the Express application by setting up the Express server in the middleware
const app = express()
const PORT = 3000

/*
1. variable.use(cors()): mounts the middleware and cors tells express how to handle resources accross domains. Important because 
    the front and backend are hosted on different PORTS. 
2. variable.use(express.json()): mounts the express.json method to parse incoming requests in JSON format (payloads).

middleware: functions that have access to the request object (req), the response object (res), and the next middleware function 
in the application’s request-response cycle. The next middleware function is denoted by the variable next. The middleware can 
perform operations on the request and response objects, end the request-response cycle, and call the next middleware function in the stack.   
*/
app.use(cors())
app.use(express.json())

/* Last step, this creates the server and listens for incoming requests on the PORT
1. .listen(PORT, (here) => {}): is a callback function which is a function that runs when the server starts listening for requests 
    (server is established).

The purpose of the the callback function is to run the connect to server function (in connect.js) once the server is running (listening) to
connect us to the MongoDB (the Atlas cluster).
*/
app.listen(PORT, () => {
    connect.connectToServer()
    console.log(`Server is running on port ${PORT} and connected to MongoDB Atlas Cluster`)
})

/* STEP 2: CONNECT THE FRONTEND TO THE BACKEND WITH EXPRESS MIDDLEWARE. CONNECT FRONTEND FUNCTIONATITY TO BACKEND FUNCTIONALITY. 
        CREATE postRoutes.js
*/
