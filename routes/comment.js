const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

function readCommentsFile() {
    const commentsList = fs.readFileSync("./data/comments.json");
    const parsedData = JSON.parse(commentsList);
    return parsedData;
}

function readCommentDetailsFile() {
    const commentsList = fs.readFileSync("./data/comments.json");
    const parsedData = JSON.parse(commentsList);
    return parsedData;
}

router.get("/", (req, res) => {
    const comments = readCommentsFile();
    res.json(comments);
});

router.get("/:id", (req, res) => {
    const comments = readCommentsFile();
    const comment = comments.find((c) => c.id == req.params.id);
     
    if (!comment) {
        res.status(404).json({ message: "Comment not found" });
    } else {
        res.json(comment);
    }
});

router.post("/", (req, res) => {
    console.log(req.body);
    const newComment = {
        id: uuidv4(),
        name: req.body.name,
        comment: req.body.comment,
        timestamp: new Date().getTime(),
    };

    const commentsDetails = readCommentDetailsFile();
    commentsDetails.push(newComment);
    fs.writeFileSync("./data/comments.json", JSON.stringify(commentsDetails));
    res.status(201).json(newComment);
});

module.exports = router;