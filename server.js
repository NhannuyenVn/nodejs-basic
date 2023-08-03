const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world")
})

app.get('/about', (req, res) => {
    res.send("hello About")
})

app.listen(port, () => {
    console.log(`heelo ${port}`)
})
