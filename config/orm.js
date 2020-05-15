const connection = require("./connection.js")

function printQuestionMarks(num){
    let arr = []

    for (let i = 0; i < num; i++){
        arr.push("?")
    }

    return arr.toString
}


const orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";"
        connection.query(queryString, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    },
    insertOne: function(table, value, cb) {
        let queryString = "INSERT INTO " + table + "(name, devoured) VALUES (";
        queryString += printQuestionMarks(value.length);      
        queryString += ", true);"

        connection.query(queryString, value, (err, result)=>{
            if (err) {throw err}
            cb(result)
        })
    },
    updateOne: function(table, type, cb) {
        let queryString = "UPDATE " + table + " SET devoured=true WHERE name="
        queryString += type.toString()

        connection.query(queryString, (err, result) {
            if (err) {throw err}
            cb(result)
        })
    }
}
module.exports = orm;