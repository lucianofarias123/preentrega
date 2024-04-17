const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.json());
app.use('/products', require('./routes/products'));
app.use('/carts', require('./routes/carts'));
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor!');
});
app.listen(PORT, () => {
    console.log(`El servidor está escuchando en el puerto ${PORT}`);
});