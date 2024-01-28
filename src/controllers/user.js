const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.signup = async function (req, res, next) {
    try {

        // TODO: VALIDATE USER INFORMATION



        req.body.password = await bcryptjs.hash(req.body.password, Number(process.env.PASSWORD_SECRET))
        // update database
        await User.create(req.body)
        res.redirect("/login/admin")

    } catch (error) {
        console.log(error)
    }
}


module.exports.login = async function (req, res, next) {
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email) {
            return res.redirect("404")
        }

        if (!password)
            return res.redirect(`/login?&email=${email}`)


        const user = await User.findOne({ email: email })
        if (!user)
            return res.redirect("404")


        const isPassword = await bcryptjs.compare(password, user.password)
        if (!isPassword)
            return res.redirect("404?message=Invalid Password")

        // create a token | (ID card)
        const token = jwt.sign({
            _id: user._id,
            username: user.username,
            firstName: user.firstName
        }, process.env.JWT_SECRET, { expiresIn: "60m" })


        req.session.token = token
        console.log(token)
        res.cookie("token", token)

        res.redirect("/dashboard")

    } catch (error) {
        console.log(error)
    }
}

module.exports.logout = async function (req, res, next) {
    try {
        res.clearCookie("token")
        return res.redirect("/login")
    } catch (error) {
        console.log(error)
    }
}


module.exports.addUser = async function (req, res, next) {
    try {
        const body = req.body

        const user = await User.create({
            ...body,
            companyName: req.user.companyName
        })

        console.log(user)
        res.redirect("/dashboard")

    } catch (error) {
        console.log(error)
    }
}