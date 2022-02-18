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
server.get('/testimonial', (_, res) => {
    res.render('testimonial');
});

// server.get('/admin', (req, res) => {

//     if (req.url.includes("?role")) {
//         if (req.query.role.toLocaleLowerCase() == 'admin')
//             res.render('admin', { title: args.admin, message: " hellow admin" });
//         else
//             res.render('login', { title: args.login });
//     } else
//         res.render('login', { title: args.login });
// });



server.use((_, res) => {
    res.render('404', { title: 'Error : Not Found' });
});

const port=process.env.PORT || 44000
server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:44000');
})