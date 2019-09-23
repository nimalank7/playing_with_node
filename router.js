var express = require('express')
const app = express();
const birds = require('./birds.js')

app.use(function logging(req, res, next) {
    console.log("Global middleware!")
    next();
})

app.use(function(req, res, next) {
    res.write('<p>Hello World</p>')
    next();
});

app.use('/middleware', function onlyMiddleware(req, res, next) {
    console.log("This is the middleware unique to the middleware route");
    next();
})


app.use('/birds', birds);

app.get('/', (req, res) =>{
    res.write('<p>Another paragraph</p>')
    return res.end()
});

app.get('/middleware', (req, res) =>{
    
    return res.send('Middleware');
});

app.listen(4242, () => {
    console.log('Express Server is running...')
});

