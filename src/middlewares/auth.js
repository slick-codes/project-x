const jwt = require("jsonwebtoken")
const User = require("./../models/User")

module.exports.auth = async function (req, res, next) {
    try {
        const token = req.session.token || req.cookies.token
        const unhashUser = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(unhashUser._id)

        if (!user) return res.redirect("/login/admin")

        req.user = user
        next()

    } catch (error) {
        res.redirect("/login")
    }
}

module.exports.isLogedIn = async function (req, res, next) {
    try {
        const token = req.session.token || req.cookies.token
        if (!token) return next()

        const unhashUser = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(unhashUser._id)

        console.log(user)
        if (user) return res.redirect("/dashboard")

        next()

    } catch (error) {
        console.log(error)
        res.redirect("/404")
    }
}