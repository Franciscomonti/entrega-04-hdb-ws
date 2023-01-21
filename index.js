const express = require('express');
const app = express();

const routerProduct = require('./app/routes/product.js');
const routerCart = require('./app/routes/cart.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', routerProduct);
app.use('/api/carts', routerCart);

const PORT = 8080;

const server =app.listen(PORT, () => {
    console.log(`corriendo en el servidor http://localhost:${PORT}`)
});

server.on('error', ()=> { console.log('error: ' + error)});