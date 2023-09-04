import {FlatManager} from "../logic/FlatManager";
import {FakeFlatDao} from "../storage/dao/FakeFlatDao";

var express = require('express');
var router = express.Router();


var flatManager : FlatManager = new FlatManager(new FakeFlatDao());

router.get('/', function(req, res) {
});

/* GET home page. */
router.get("/appartements", async (req, res) => {
    res.render()
});

router.get("/appartements/quartier/:quarter", async (req, res) => {
});


module.exports = router;