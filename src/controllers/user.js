const User = require("../models/User")


module.exports.signup = async function (req, res, next) {
    try {

        // TODO: VALIDATE USER INFORMATION



        // update database
        console.log(req.body)
        await User.create(req.body)
        res.redirect("admin/login")

    } catch (error) {
        console.log(error)
    }
}