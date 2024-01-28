const mongoose = require("mongoose")




const userSchema = {
    fullName: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true },
    companyName: { type: "string", required: true },
    accountType: { type: "string", required: true }
}



const User = mongoose.model("user", userSchema, {
    timestamps: true
})

module.exports = User