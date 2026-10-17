const express = require("express");
const { Url } = require("./db");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to URL shortener");
});

router.post("/shorten", async (req, res) => {
    const longUrl = req.body.url;

    if (!longUrl) {
        return res.status(400).json({message: "URL is required"});
    }

    const shortCode = Math.random().toString(36).substring(2, 8);
    const newUrl = new Url({
        longUrl: longUrl,
        shortCode: shortCode
    });

    await newUrl.save();
    res.json({
        longUrl: longUrl,
        shortUrl: `http://localhost:3000/${shortCode}`
    });
});

router.get("/:shortCode", async (req, res) => {
    const shortCode = req.params.shortCode;

    const url = await Url.findOne({shortCode: shortCode});

    if (!url) {
        return res.status(404).send("Short URL not found");
    }

    res.redirect(url.longUrl);
});

router.use((req, res) => {
    res.status(404).send("Route not found");
});

module.exports = router;