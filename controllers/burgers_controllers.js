const express = require('express')
const burger = require("../models/burger")
const router = express.Router()

router.get("/", (req,res)=>{
    burger.selectAll((data)=>{
        let hbsData= {
            burgers: data
        }
        console.log(obj)
        res.render("index", hbsData)
    })
})

router.post((req, res)=>{
    burger.insertOne([
        req.body.name
    ], (result)=>{
        res.render("index", result)
    })
})

router.put((req,res)=>{
    burger.updateOne([
    
    ])
})
