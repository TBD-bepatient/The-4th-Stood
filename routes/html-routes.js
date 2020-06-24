// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("members");
        }
        res.render("signup");
    });

    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.render("members");
        }
        res.render("login");
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/members/", isAuthenticated, function (req, res) {
        console.log(JSON.stringify(req.user));
        db.Games.findAll({
            where: {
                userID: req.user.id
            }
        }).then(function (games) {
            // console.log(games)
            res.render("members", { id: req.user.id, user: req.user.email, game: games });
        });
        // res.render("members",{id: req.user.id, user: req.user.email});
    });

    app.get("/catalog/", function (req, res) {
        db.Games.findAll({
            
        }).then(function (games) {
            console.log(games)
            res.render("catalog", { game: games });
        });
    })

    app.get("/catalog/search/:type/:search", function (req, res) {
        db.Games.findAll({
            where: {
                owned_requested: req.params.type,
                name: req.params.search
            }
        }).then(function (games) {
            console.log(games)
            res.render("catalog", { game: games });
        });
    })
};
