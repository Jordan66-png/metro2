module.exports = fun => {
const express = require('express');
const app = express();
const port = 309;
app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(fun));
}