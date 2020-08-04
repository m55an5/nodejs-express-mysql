module.exports = app => {
    const melbourne = require("../controllers/melbourne.controller.js");

    console.log("Making call");
    app.get("/melbourne", melbourne.findAll);

};