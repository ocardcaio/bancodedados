const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: 3307,
    password:'',
    database:'caio',
})

connection.connect();
let query = "delete from usuario where codigo =3;";
connection.query(query, function(error,results,fields){
console.log(results);
})
    
connection.end();