const express = require("express");
const fs = require('fs');
const app = express();
const cors = require('cors');
const commentRoutes = require("./routes/comment");
const bodyParser = require("body-parser");
require('dotenv').config()
const PORT = process.env.PORT || 5050
const router = express.Router(); 
app.use(cors())
app.use(express.json());


app.use((req, res, next) => {
    console.log('Hey Middleware');
    next();
})

app.use("/comments", commentRoutes);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
