const express = require("express")

const router = express.Router();

const burger = require("../models/burger")

router.get("/", (req, res) => {
    burger.all(function(data) {
        const hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;
    console.log("condition, condition");
    
    burger.update({
        devoured: req.body.sleepy
    },condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/cats/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete("/api/durgers/:id", function(req, res) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;