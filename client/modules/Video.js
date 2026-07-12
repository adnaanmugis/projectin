const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({

    title: String,

    subject: String,

    url: String

});

module.exports = mongoose.model("Video", videoSchema);