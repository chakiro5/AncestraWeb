const express = require('express');
const router = express.Router();

const Producto = require('../models/Producto');

router.get('/', async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
});

router.get('/:id', async (req, res) => {
    const productos = await Producto.findById(req.params.id);
    res.json(productos);
});

router.post('/', async (req, res) => {
    const producto = new Producto(req.body);
    await producto.save();
    res.json({
        status: 'Producto guardado'
    });
});

router.put('/:id', async (req, res) => {
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.json({
            status: 'Producto actulizado'
     });
});

router.delete('/:id', async (req, res) => {
    await Producto.findByIdAndRemove(req.params.id);
    res.json({
            status: 'Producto eliminado'
     });
});

module.exports = router;