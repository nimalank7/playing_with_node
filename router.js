var express = require('express')
const app = express();
const birds = require('./birds.js')

app.use(function logging(req, res, next) {
    console.log("Global middleware!")
    next();
})


app.use('/birds', birds);

app.get('/', (req, res) =>{
    
    return res.send('Testing');
});

app.listen(4242, () => {
    console.log('Express Server is running...')
});

