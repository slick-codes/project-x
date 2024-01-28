const router = require("express").Router()
const auth = require("../middlewares/auth")
const controllers = require("./../controllers/common.view")

router.get("/", controllers.signupView)
router.get("/login", controllers.loginView)


router.get("/dashboard", auth, controllers.dashboardView)

module.exports = router