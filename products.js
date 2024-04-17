const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de productos');
});

router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.send(`Detalles del producto con ID ${productId}`);
});

module.exports = router;