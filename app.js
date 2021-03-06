const path = require('path');

const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// db.execute('SELECT * from products').then((result) => {
//   console.log(result[0]);
// }).catch((err) => {
//   console.log(`Error is ${err}`);
// })

// console.log(process.env.PASSWORD)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize.sync().then(result => {
  // console.log(result);
}).catch(err => {
  console.log(err);
})

app.listen(4000);
