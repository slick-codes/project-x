const router = require("express").Router()
const { auth, isLogedIn } = require("../middlewares/auth")
const controllers = require("./../controllers/common.view")

router.get("/", isLogedIn, controllers.signupView)
router.get("/login", isLogedIn, controllers.loginView)


router.get("/dashboard", auth, controllers.dashboardView)

module.exports = router