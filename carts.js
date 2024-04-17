const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de carritos');
});

router.get('/:id', (req, res) => {
  const cartId = req.params.id;
  res.send(`Detalles del carrito con ID ${cartId}`);
});

module.exports = router;