const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.write("<p>Hello World!</p>")
})

app.listen(4242, () => {
    console.log("Express Server is running on 4242")
})