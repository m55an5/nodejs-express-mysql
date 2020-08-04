const express = require("express");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile })

const app = express();

//  parse requests of content-type: application/json
app.use(bodyparser.json())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended : true }))

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to this."})
});

require("./app/routes/melbourne.routes.js")(app);

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});


/*
What we do are:
– import express and body-parser modules. Express is for building the Rest apis, and body-parser helps to parse the request and create the req.body object that we will need to access in our routes.
– create an Express app, then add body-parser middlewares using app.use() method.
– define a GET route which is simple for test.
– listen on port 3000 for incoming requests.
*/