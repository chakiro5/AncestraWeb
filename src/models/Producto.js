const mongoose = require('mongoose');
const {Schema} = mongoose;

const Producto = new Schema ({

    nombreProducto: String,
    linkimagenProducto: String,
    descripcionProducto: String,
    precioProducto: String,
    informacionVededor: String,
    observaciones: String
});

module.exports = mongoose.model('Producto', Producto);