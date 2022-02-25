const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

// app.get('/', function (req, res) {
//     res.send('Hello traveler, this is index');
// }); // index?
// app.get('/about', function (req, res) {
//     res.send('Here I am, ABOUT ME');
// }); // about

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
});
app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/about.html'))
});
// app.use(express.static('/'));

app.listen(port, function() {
    console.log(`Listening on post ${port}`);
});