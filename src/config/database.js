const mongoose = require("mongoose")

const url = process.env.MONGODB_URL

const options = {
}

mongoose.connect(url, options)
    .then(function (data) {
        console.log("Database connected Successfully!")
    })
    .catch(function (error) {
        console.log("Database connection error")
    })