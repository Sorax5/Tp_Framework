var express = require('express');
const {FlatManager} = require("../logic/FlatManager");
var router = express.Router();

var flatManager : FlatManager = new FlatManager();

/* GET home page. */
router.get("/appartements", async (req, res) => {

});

router.get("/appartements/quartier/:quarter", async (req, res) => {

});


module.exports = router;