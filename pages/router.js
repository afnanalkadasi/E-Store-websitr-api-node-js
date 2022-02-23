const express = require('express');
const server = express.Router();
const axios = require('axios').default;


server.get('/', async(req, res, next) => {
  try{
let response = await axios.get('https://dummyjson.com/products');
res.render('index', {products: response.data.products });
  }catch(err){
    console.log(err);
  }
});

server.get('/about',(req, res, next)  => {
  res.render('about');

});

server.get('/contact', (req, res, next) => {
  res.render('contact');
});
server.get('/product_det', (req, res, next) => {
  res.render('product_det');
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

server.get('/products/categories',async(req, res, next) => {
  try {
    
    let response2 = await axios.get(
`https://dummyjson.com/products/categories`
    );
    res.render('categories', {
      products: response2.data,
      
    }
    );
  } catch (err) {
    console.log(err);
  
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
  
server.get('/products/category/:category',async(req, res, next) => {
  try { 
    const category = req.params.category;
    let response = await axios.get(
      `https://dummyjson.com/products/category/${category}`
    );
    res.render('category', {
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


// server.get('/products/category/smartphones', (_, res) => {

// });
server.get('/testimonial', (req, res, next) => {
  res.render('testimonial');
});


server.use((req, res, next) => {
  res.render('404', { title: 'Error : Not Found' });
});

module.exports = server;

