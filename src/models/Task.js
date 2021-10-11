const mongoose = require('mongoose');
const {Schema} = mongoose;

const Task = new Schema ({

    nombreProducto: String,
    linkimagenProducto: String,
    descripcionProducto: String,
    precioProducto: String,
    informacionVededor: String,
    observaciones: String
});

module.exports = mongoose.model('Task', Task);