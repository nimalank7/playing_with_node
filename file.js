const express = require('express');
const nunjucks = require('nunjucks');
const server = express();
var PATH_TO_TEMPLATES = './views';

nunjucks.configure(PATH_TO_TEMPLATES, {
    autoescape: false,
    express: server
});

server.use(express.urlencoded({
    extended: true
}));

server.get('/', (req, res) =>{
    
    return res.render('index.html');
});

server.post('/form', (req, res) =>{
    var model = {
        title: req.body.title,
        url: req.body.url
    };
    
    return res.render('form_values.html', model);
});

server.listen(4242, () => {
    console.log('Express Server is running...')
});