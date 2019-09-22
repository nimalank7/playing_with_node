var express = require('express')
const app = express();

function middleHandler(req, res, next) {
    console.log("middleHandler function");
    next();
}

app.use(function (req, res, next) {
    console.log("first middle ware");                                                                                                             
    next();
});

app.use(function (req, res, next) {
    console.log("second middle ware");                                                                                                             
    next();
});

app.get('/', middleHandler, function (req, res) {
    console.log("after middleware function and inside final middleware");
    res.send("page render finished");
});

app.listen(4242, () => {
    console.log('Express Server is running...')
});