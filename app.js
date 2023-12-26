/* // app.js
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('./dao/mongoose');
const ProductManager = require('./dao/models/ProductManager');
const CartManager = require('./dao/models/CartManager');
const MessageManager = require('./dao/models/MessageManager');

const app = express();
const productManager = new ProductManager(path.join(__dirname, './src/data/products.json'));
const cartManager = new CartManager(path.join(__dirname, './src/data/carts.json'));
const messageManager = new MessageManager();

app.use(express.json());
app.engine('.handlebars', exphbs({ extname: '.handlebars' }));
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'src/views'));

const productRouter = require('./src/routes/productRouter')(productManager);
app.use('/api/products', productRouter);

const cartRouter = require('./src/routes/cartRouter')(cartManager);
app.use('/api/carts', cartRouter);

const messageRouter = require('./src/routes/messageRouter')();
app.use('/api/messages', messageRouter);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
 */

// app.js
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const mongoose = require('./dao/mongoose');
const ProductManager = require('./dao/models/ProductManager');
const CartManager = require('./dao/models/CartManager');
const MessageManager = require('./dao/models/MessageManager');

const app = express();
const productManager = new ProductManager();
const cartManager = new CartManager();
const messageManager = new MessageManager();

app.use(express.json());
app.engine('.handlebars', exphbs({ extname: '.handlebars' }));
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'src/views'));

const productRouter = require('./src/routes/productRouter')();
const cartRouter = require('./src/routes/cartRouter')(cartManager);
const messageRouter = require('./src/routes/messageRouter')();

app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/messages', messageRouter);

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
