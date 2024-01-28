const router = require("express").Router()
const auth = require("../middlewares/auth")
const controllers = require("./../controllers/user")

router.post("/create/user", controllers.signup)
router.post("/login", controllers.login)
router.post("/logout", controllers.logout)
router.post("/add/user", auth, controllers.addUser)
module.exports = router