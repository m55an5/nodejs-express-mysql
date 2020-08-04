const sql = require("../models/db.js");

// constructor 
const Melbourne = function(melbourne) {
    this.cases = melbourne.cases;
};

Melbourne.getAll = result => {
    console.log("Model 1");
    sql.query("SELECT * FROM Melbourne", (err , res) => {
        if (err) {
            console.log("Model 2");
            console.log("error: ", err);
            result(null, err)
            return 
        }
        console.log("Model 3");
        const retArr = res.map((element) => {
            return {cases: element.cases};
        });
        result(null, {statusCode: "OK", melbCases: retArr});
    });
    console.log("Model 4");
};

module.exports = Melbourne;