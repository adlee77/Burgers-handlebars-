const connection = require("./connection.js")



const orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    },
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + "(name, devoured) VALUES ('";
        queryString += value.toString() + "'";      
        queryString += ", false);"

        connection.query(queryString, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    },
    updateOne: function(table, id, cb) {
        let queryString = "UPDATE " + table + " SET devoured=true WHERE id="
        queryString += id.toString()

        connection.query(queryString, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    },
    deleteOne: function(table, id, cb) {
        let queryString = "DELETE FROM " + table + " WHERE id="
        queryString += id.toString()

        connection.query(queryString, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    }
}
module.exports = orm;