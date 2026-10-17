const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");
const { connectDB } = require("./db");

dotenv.config();
const app = express();

app.use(express.json());
app.use(routes);
connectDB()
    
    .then(() => {
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    
    .catch((error) => {
        console.log("Database connection failed:", error);
    });