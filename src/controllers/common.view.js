const User = require("../models/User")



module.exports.signupView = async function (req, res, next) {
    try {

        // prevent signup to be available when there's a super admin
        const user = await User.findOne({ role: "super-admin" })
        if (user) res.redirect("/login")

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
            return res.redirect("/login?message=Email Is Not Registered")

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
