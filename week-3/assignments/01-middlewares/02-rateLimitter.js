const express = require("express");
const app = express();
const port = 4000;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};

app.use(function(req, res, next){

    //Retrieve the user id from the headers
    const userId = req.header('user-id');

    //If no number of requests are made then initialize it with 1 or else increment it
    if(!numberOfRequestsForUser[userId]){
        numberOfRequestsForUser[userId] = 1;
    } else {
        numberOfRequestsForUser[userId]++;
    }
    console.log(`User ${userId} has made ${numberOfRequestsForUser[userId]} requests.`);


    //If the request exceeds 5 then show an error
    if(numberOfRequestsForUser[userId] > 5){
        res.status(404).json({
            message: "Rate limit exceeded",
            status: 404,
        });
    }

    //Next
    next();

})

setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

app.get('/user', function(req, res) {
    res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
});

app.listen(port, () => {
    console.log(`Port running on ${port}`);
});