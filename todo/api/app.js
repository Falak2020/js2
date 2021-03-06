const express = require('express');
const app = express();

// importera controllers
const todosController = require('./controllers/todosController');
const userController=require('./controllers/usercontroller')

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
  if(req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
  }
  next()
})


// För att vi ska kunna använda JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Controllers
app.use('/api/todos', todosController);
app.use('/api/users',userController)
module.exports = app;