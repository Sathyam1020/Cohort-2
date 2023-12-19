const express = require("express");
const app = express();
const port = 3000;

let requestCount = 0;

app.use(function(req, res, next) {
    requestCount++;
    next();
})

app.get('/', (req, res) => {
    res.send("Hello from the other side of the world");
})

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestCount });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})