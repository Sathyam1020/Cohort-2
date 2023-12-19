const express = require('express');

const app = express();
const port = 5000;

let errorCount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to
// 1. Ensure that if there is ever an exception, the end user sees a status code of 404
// 2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint

app.use((err, req, res, next) => {
    // Increment errorCount for each exception
    errorCount++;

    // Respond with a 404 status code
    res.status(404).json({ error: 'Not Found' });
});

app.get('/user', function(req, res) {
    try {
        throw new Error("User not found");
        res.status(200).json({ name: 'john' });
    } catch (error) {
        // Pass the error to the error-handling middleware
        next(error);
    }
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
    res.status(200).json({ errorCount });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})