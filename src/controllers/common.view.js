


module.exports.signupView = async function (req, res, next) {
    try {
        res.render("signup", {})
    } catch (error) {
        console.log(error)
    }
}


module.exports.loginView = async function (req, res, next) {
    try {
        res.render("login", {
            type: req.params.type
        })
    } catch (error) {
        console.log(error)
    }
}

