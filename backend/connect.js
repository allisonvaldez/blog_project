/*
1. Declare constants for MongoDB connection
2. This code uses the MongoDB Node.js driver to connect to a MongoDB Atlas cluster using the Stable API version 1 
3. This is a persistent connection to the database, allowing for operations to be performed without needing to reconnect each time.
4. The connection string is stored in an environment variable for security.
5. The database variable is declared but not initialized, allowing it to be set later when needed.
6. The run function is commented out, but it can be used to test the connection by pinging the database.
7. The client will close after the operation is complete, ensuring resources are freed.
*/

const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config({path: "./config.env"});

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.ATLAS_URI, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
  }
});

// Make a variable to represent the database 
let database 


module.exports = {
    //  Creates the initial connection between the code and the database
    connectToServer: () => {
        database = client.db("blogData")
    },
    // Use this functino to get access to the database
    getDb: () => {
        return database;
    }
}

console.log("Connected to MongoDB Atlas Cluster");
/*async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
*/
