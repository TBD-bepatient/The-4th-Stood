"use strict";

// Dependencies
const fetch = require("node-fetch");

// Useful constants
const endpoint = "https://www.boardgameatlas.com/api";

// Function defs
const apiSearch = async (title) =>
    (await fetch(`${endpoint}/search?name=${title}&client_id=${process.env.DB_atlasID}`, { method: "Get" })).json();

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
