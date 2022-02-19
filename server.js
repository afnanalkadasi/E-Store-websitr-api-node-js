const express = require('express');
const server = express();
server.set('view engine', 'ejs');

server.use(express.static('public'));


server.get('/', (_, res) => {
    res.status(200).render('index');
});


server.get('/index', (_, res) => {
    res.status(200).render('index');
});

server.get('/about', (_, res) => {
    res.render('about');
});

server.get('/contact', (_, res) => {
    res.render('contact');
});

server.get('/product', (_, res) => {
    res.render('product');
  
});
server.get('/product/:id', (_, res) => {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/1", true);
    xhr.onload = function(){
        console.log(xhr.responseText);
    };
    xhr.send();
});
server.get('/product/search?q=phone', (_, res) => {

});
server.get('/products/categories', (_, res) => {

});

server.get('/products/category/smartphones', (_, res) => {

});
server.get('/testimonial', (_, res) => {
    res.render('testimonial');
});


server.use((_, res) => {
    res.render('404', { title: 'Error : Not Found' });
});

const port=process.env.PORT || 44000
server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:44000');
})