const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
};

const urlSchema = new mongoose.Schema({
    longUrl: {
        type: String,
        required: true
    },
    shortCode: {
        type: String,
        required: true,
        unique: true
    }
});

const Url = mongoose.model("Url", urlSchema);
module.exports = {connectDB,Url};