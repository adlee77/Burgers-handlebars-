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
    updateOne: function(id, cb) {
        orm.updateOne("burgers", id, (res)=>{
            cb(res)
        })
    },
    deleteOne: function(id, cb) {
        orm.deleteOne("burgers", id, (res)=>{
            cb(res)
        })
    }
}

module.exports = burger;