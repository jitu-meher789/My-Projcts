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
    TimeofUpload: Date,
    AffiliatedLink: String
});
const Review = mongoose.model("reviews", reviewSchema);

app.listen(3001, console.log("Server running at port 3001"));

app.get("/reviews", async (req, res) => {
    try {
        let query = {};
        if (req.query.courseName && req.query.courseName.trim() !== "") {
            query.courseName = new RegExp(req.query.courseName, 'i');
        }
        const result = await Review.find(query).sort({ Rating: -1 });
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
    console.log(req.body);
});

app.post("/adminDelete", async function (req, res) {
    console.log(req.body.Id);
    try {
        const result = await Review.deleteOne({ _id: req.body.Id });
        console.log(result);
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while deleting the document." });
    }
});

app.post("/updateLink", async function (req, res) {
    const { id, affiliateLink } = req.body;

    // Ensure both id and affiliateLink are provided in the request
    if (!id || !affiliateLink) {
        return res.status(400).json({ error: "Missing required data" });
    }

    try {
        const updatedReview = await Review.findByIdAndUpdate(id, { AffiliatedLink: affiliateLink }, { new: true });

        if (!updatedReview) {
            return res.status(404).json({ error: "Review not found" });
        }

        console.log("Review updated successfully:", updatedReview);
        res.status(200).json(updatedReview);
    } catch (error) {
        console.error("Error updating review:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});