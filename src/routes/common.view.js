const router = require("express").Router()
const controllers = require("./../controllers/common.view")

router.get("/", controllers.signupView)
router.get("/login/:type", controllers.loginView)

module.exports = router