const mongoose = require("mongoose")




const userSchema = mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    companyName: { type: String, required: true },
    accountType: { type: String, required: true }
}, { timestamps: true })


const User = mongoose.model("user", userSchema)

module.exports = User