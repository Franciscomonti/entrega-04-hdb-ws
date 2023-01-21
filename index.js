const express = require('express');
const { engine } =  require('express-handlebars');

const routerProduct = require('./app/routes/product.js');
const routerCart = require('./app/routes/cart.js');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('views', __dirname + 'views'); //ojo!!
app.set('view engine', 'handlebars');

app.use('/api/products', routerProduct);
app.use('/api/carts', routerCart);


const server =app.listen(PORT, () => {
    console.log(`corriendo en el servidor http://localhost:${PORT}`)
});

server.on('error', ()=> { console.log('error: ' + error)});