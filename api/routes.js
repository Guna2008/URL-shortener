const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to URL shortener");
});

router.post("/shorten", (req, res) => {
    console.log(req.body);
    res.send("URL received");
});

router.use((req, res) => {
    res.status(404).send("Route not found");
});

module.exports = router;