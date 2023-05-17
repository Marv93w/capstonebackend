// const express = require("express");
// const fs = require('fs');
// const app = express();
// const cors = require('cors');
// const commentRoutes = require("./routes/comment");
// require('dotenv').config()
// const PORT = process.env.PORT || 5050
// const router = express.Router(); 
// app.use(cors())
// app.use(express.json());


// app.use((req, res, next) => {
//     console.log('Hey Middleware');
//     next();
// })

// app.use("/comments", commentRoutes);

// app.listen(PORT, () => {
//     console.log("Server is running on port " + PORT);
// });


const express = require('express');
const app = express();

const PORT = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
   console.log(`app running on port ${PORT}`)
});