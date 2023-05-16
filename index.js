// const express = require('express');
// const mongoose = require('mongoose');

// const app = express();
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost/comments', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Create a comment schema
// const commentSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   comment: String,
//   timestamp: Date,
// });

// // Create a comment model
// const Comment = mongoose.model('Comment', commentSchema);

// // API routes
// app.get('/comments', async (req, res) => {
//   try {
//     const comments = await Comment.find();
//     res.json(comments);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// app.post('/comments', async (req, res) => {
//   try {
//     const { id, name, comment, timestamp } = req.body;
//     const newComment = new Comment({ id, name, comment, timestamp });
//     await newComment.save();
//     res.status(201).json(newComment);
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred' });
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is listening on port 3000');
// });



const express = require("express");
const fs = require('fs');
const app = express();
const cors = require('cors');
const commentRoutes = require("./routes/comment");
const bodyParser = require("body-parser");
require('dotenv').config()
const { PORT } = process.env
const router = express.Router(); // To use router, instantiate it like this
// This middleware allows us to post JSON in request.body
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
