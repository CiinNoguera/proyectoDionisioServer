const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbHost = process.env.DB_HOST;
const apiVersion = process.env.API_VERSION;
const ipServer = process.env.IP_SERVER;
const port = 3434;

const connectDB = async () => {
    try{
        await(`mongodb+srv://${dbUser}${dbPass}@${dbHost}/`);
        app.listen(port, () => {
            console.log("============================");
            console.log("======= API DIONISIO =======");
            console.log("============================");
            console.log(`http://${ipServer}:${port}/api/${apiVersion}/`);
        });
    }catch (err){
        console.log("error en la conexión", err)
    }
};

connectDB();
