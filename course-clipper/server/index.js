const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://purumaniashishreddy:ashish@cluster0.ld0rpgp.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json());
app.use(cors());

const reviewSchema = mongoose.Schema({
    username: String,
    emailId: String,
    Rating: Number,
    courseDescription: String,
    courseName: String,
    platformName: String,
    courseURL: String,
    purchaseDate: Date,
    TimeofUpload: Date
});
const Review = mongoose.model("reviews", reviewSchema);

app.listen(3001, console.log("Server running at port 3001"));

app.get("/reviews", async (req, res) => {
    try {
        const result = await Review.find({});
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/reviews", async (req, res) => {
    const currentTime = new Date();
    req.body.TimeofUpload = currentTime;
    console.log(req.body);
    const review = new Review(req.body);
    review.save();
    try {
        const result = await Review.find({});
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});