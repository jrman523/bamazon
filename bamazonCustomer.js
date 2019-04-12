const sql = require('mysql');
const key = require('key.js');
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: key.pass.password,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
});

function error(err){
    throw (err);
}

function menu() {
    queryAll();
    inquirer.prompt([
        {
            type: 'input',
            message: 'enter the product id you would like to buy',
            name: 'id'
        },
        {
            type: 'input',
            message: 'how many would you like to buy',
            name: 'num'
        }
    ]).then(function (buy){
        connection(`SELECT * FROM products Where item_id = ${buy.id}`, function (err, data){
            if (!err){
                if (data.stock_quantity >= buy.num){
                    var stockLeft = data.stock_quantity - buy.num ;
                    update(stockLeft, buy.id);
                } else {
                    console.log('Insufficient quantity!');
                }
            }else {
                error(err);
            }
        }); 
    });
}

function queryAll(){
    connection.query('SELECT * FROM products', function (err, data) {
        if (!err){
            console.table(data);
        }else {
            error(err);
        }
    });
}

function update (num, id){
    connection.query(`UPDATE products SET stock_quantity = ${num} WHERE item_id = ${id}`, function(err , data){
        if(!err){
            console.log(`purchase successful`);
        }else {
            error(err);
        }
    });
}

menu();