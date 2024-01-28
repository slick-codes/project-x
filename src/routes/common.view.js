const router = require("express").Router()
const controllers = require("./../controllers/common.view")

router.get("/", controllers.signupView)

module.exports = router