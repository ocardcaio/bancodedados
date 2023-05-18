const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: 3307,
    password:'',
    database:'caio',
})

connection.connect();
let query = "update usuario set senha = 'PaysanduSerieA' where codigo = 2;";
connection.query(query, function(error,results,fields){
console.log(results);
})
connection.end();