const router = require("express").Router();

const Video = require("../models/Video");

router.post("/", async (req, res) => {

    const video = await Video.create(req.body);

    res.json(video);

});

router.get("/", async (req, res) => {

    const videos = await Video.find();

    res.json(videos);

});

module.exports = router;