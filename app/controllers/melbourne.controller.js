const Melbourne = require("../models/melbourne.model.js");

//retrieve all melboutne data from the database
exports.findAll = (req, res) => {
    console.log("Controller 1");
    Melbourne.getAll((err, data) => {
        console.log("Controller 2");
        if (err){
            console.log("Controller 3");
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving melbourne."
            });
        }
        else
            console.log("Controller 4"); 
            console.log("-------------------------++++++++++++++++++++\n",data);
            res.send(data);
    });
    console.log("Controller 5"); 
};