const express = require('express');
const server = express.Router();
const axios = require('axios').default;



server.get('/', (req, res, next) => {
  res.render('index');
});


server.get('/index',(req, res, next)=> {
  res.render('index');
});

server.get('/about',(req, res, next)  => {
  res.render('about');
});

server.get('/contact', (req, res, next) => {
  res.render('contact');
});

  server.get('/products',async (req, res, next) => {
    try {
      let response = await axios.get('https://dummyjson.com/products');
      res.render('products', {
        products: response.data.products,
       
      });
    } catch (err) {
      console.log(err);
    }
  });
server.get('/products/:id', async (req, res, next) => {
  try {
    const productId = req.params.id;
    let response = await axios.get(
      `https://dummyjson.com/products/${productId}`
    );

    res.render('product', {
      product: response.data,
    });
  } catch (err) {
    console.log(err);
    res.send('<h1>Sorry There are no products to display.....</h1>')
  }
});
server.get('/products/search', async (req, res, next) => {
  try {
    const query = req.query.q;
    let response = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );

    res.render('search', {
      products: response.data.products,
    });
  } catch (err) {
    console.log(err);
    res.send('<h1>Sorry There are no products to display.....</h1>')
  }
});

// server.get('/products/categories', (_, res) => {

// });

// server.get('/products/category/smartphones', (_, res) => {

// });
server.get('/testimonial', (req, res, next) => {
  res.render('testimonial');
});


server.use((req, res, next) => {
  res.render('404', { title: 'Error : Not Found' });
});

module.exports = server;

