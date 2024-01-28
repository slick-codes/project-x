const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const path = require("path")

dotenv.config()
require("./config/database")


//NOTE: Router Importation (Here)
const commonView = require("./routes/common.view")
const userRoute = require("./routes/user")

const app = express()


// NOTE: External middlewares here
app.use(cors())
app.use(express.static(path.join(__dirname, "..", "static"))) // setting up static directory
app.use(express.json()) // setting up json parser (to parse json body)
app.use(express.urlencoded({ extended: true })) // setting up url parser (to parse html forms)

// configure ejs template 
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "templates"))

// setup imported routes here 
app.use(commonView)
app.use(userRoute)

app.use(function (req, res, next) {
    try {
        res.render("404")
    } catch (error) { }
})

let PORT = 7000
app.listen(PORT, console.log("Server Running On Port", PORT))