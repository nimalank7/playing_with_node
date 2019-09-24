var express = require('express')
const axios = require('axios')
const app = express();

app.get('/', (req, res) =>{
    axios.get('https://api.datamuse.com/words?sl=elefint')
    .then(response => {
        console.log(response.data);

        let words = response.data;
        res.write(words[0].word)
        res.end()
    })
    .catch(error => {
        console.log(error);
    })
    res.write("Words are loading...")
});

app.listen(4242, () => {
    console.log('Express Server is running...')
});

