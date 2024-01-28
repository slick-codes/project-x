const User = require("../models/User")



module.exports.signupView = async function (req, res, next) {
    try {



        res.render("signup", {})
    } catch (error) {
        console.log(error)
    }
}


module.exports.loginView = async function (req, res, next) {
    try {
        const email = req.query.email

        let user;
        if (email) user = await User.findOne({ email: email })

        if (!user && email)
            return res.redirect("/login")

        res.render("login", {
            user: user,
            email: email,
            message: req.query.message
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports.dashboardView = async function (req, res, next) {
    try {
        console.log(req.user)
        const users = await User.find({})
        return res.render("dashboard", { user: req.user, users: users.filter(user => user.role !== 'super-admin') })
    } catch (error) {
        console.log(error)
    }
}
