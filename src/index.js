const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://pruebasancestra:ancestra123@cluster0.xcdgq.mongodb.net/dbpruebasancestra?retryWrites=true&w=majority')
     .then(db => console.log('Base ok'))   
     .catch(err => console.error(err));  

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/productos', require('./routes/productos'));

//Static Files
app.use(express.static(__dirname + '\\public'));

//Sever is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});