const express = require('express')
const burger = require("../models/burger")
const router = express.Router()

router.get("/", (req,res)=>{
    burger.all((data=>{
        let obj= {
            burgers: data
        }
        console.log(obj)
        res.render("index", obj)
    }))
})
