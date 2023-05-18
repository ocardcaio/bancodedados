const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port: 3307,
    password:'',
    database:'caio',
})

connection.connect();

let query = "insert into usuario(login, senha) values('caioccardosooliveira@gmail.com', 'realmadrid2005')" ;
connection.query(query, function(error,results,fields){
})
connection.end();
