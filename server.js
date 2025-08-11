const express = require("express");
const app = express();
const cors = require('cors');
const { router } = require("./routes/users.routes");
const connectDB = require ('./DataBase/dbConnection');

app.use(express.json());
require("dotenv").config();

app.get("/", (req,res) =>{
    res.send("I LOVE YOU");
});

app.use('/api/v1/users', router)
const PORT = 9000;
connectDB();
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

