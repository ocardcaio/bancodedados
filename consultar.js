const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: 3307,
    password:'',
    database:'caio',
})

connection.connect();
let query = "Select * from usuario;"
connection.query(query, function(error,results,fields){
console.log(results);
})

connection.end();