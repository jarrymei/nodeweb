
exports.test = function (req, res, next) {
    res.render("index", {
        "user": "mjj"
    })
}
