const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const app = require("./index");

let port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("Database connection successfully...");
}).catch(error=>console.log(error)
)

app.listen(port,()=>{
    console.log(`listening to the server on port ${port}`);
})