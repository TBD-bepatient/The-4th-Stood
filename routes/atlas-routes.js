"use strict";

// Dependencies
const fetch = require("node-fetch");
const key = require("../config/keys");

// Useful constants
const endpoint = "https://www.boardgameatlas.com/api";

// Function defs
const apiSearch = async (title) =>
<<<<<<< HEAD
    (await fetch(`${endpoint}/search?name=${title}&client_id=${key.atlasID}`, { method: "Get" })).json();
=======
    (await fetch(`${endpoint}/search?name=${title}&client_id=${process.env.atlasID}`, { method: "Get" })).json();
>>>>>>> b165dce2afd4a03a5e64c576723d07a9e7e4ace5

module.exports = app => {
    // Returns list of games matching given string
    app.get("/atlas/list/:title", async (req, res) => {
        res.json((await apiSearch(req.params.title)).games.map(x => x.name));
        // res.json((await apiSearch(req.body.title)).games.map(x => x.name));
    });

    // Returns detailed information for game with given title
    app.post("/atlas/info/", async (req, res) => {
        res.json((await apiSearch(req.body.title)).games.filter(x => x.name === req.body.title));
    });
};
