// const mysql = require('mysql2');


// const pool = mysql.createPool({
//     host:'localhost',
//     user: 'root',
//     password:'12Akinfe$',
//     database:'node_schema',
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_schema','root',process.env.PASSWORD,{dialect:'mysql',host:'localhost'});

module.exports = sequelize;