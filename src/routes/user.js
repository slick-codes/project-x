const router = require("express").Router()
const controllers = require("./../controllers/user")

router.post("/create/user", controllers.signup)

module.exports = router