const express = require('express')
const burger = require("../models/burger")
const router = express.Router()

router.get("/", (req,res)=>{
    burger.selectAll((data)=>{
        let hbsData= {
            burgers: data
        }
        res.render("index", hbsData)
    })
})

router.post("/api/burgers", (req, res)=>{
    console.log(req.body.name)
    burger.insertOne([
        req.body.name
    ], (result)=>{
        res.json(result)
    })
})

router.put("/api/burgers/:id", (req,res)=>{
    burger.updateOne(
    req.params.id, (result)=>{
        res.json(result)
    }
    )
})

router.delete("/api/burgers/:id", (req, res)=>{
    burger.deleteOne(
        req.params.id, (result)=>{
            res.json(result)
        }
    )
})

module.exports = router;
