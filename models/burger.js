const orm = require("../config/orm.js")

const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", (res)=>{
            cb(res)
        })
    },
    insertOne: function(value, cb) {
        orm.insertOne("burgers", value, (res)=>{
            cb(res)
        })
    },
    updateOne: function(type, cb) {
        orm.updateOne("burgers", type, (res)=>{
            cb(res)
        })
    }
}

module.exports = burger;