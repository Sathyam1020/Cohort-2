// Import necessary modules
const express = require("express");
const fs = require("fs");
const path = require("path");

// Create an Express application
const app = express();

// Define the port number for the server
const port = 3000;

// Define a route to get a list of files in the "files" directory
app.get("/files", (req, res) => {
    // Read the contents of the "files" directory
    fs.readdir(path.join(__dirname, './files'), (err, files) => {
        if (err) {
            // If there's an error, respond with a 400 status and an error message
            res.status(400).json({
                message: "File could not be found"
            });
        } else {
            // If successful, respond with a 200 status and the list of files
            res.status(200).json(files);
        }
    });
});

// Define a route to get the content of a specific file
app.get("/files/:filename", (req, res) => {
    // Construct the full path to the requested file
    const filepath = path.join(__dirname, './files/', req.params.filename);

    // Read the content of the file
    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            // If there's an error, respond with a 404 status and an error message
            return res.status(404).send('File not found');
        }
        // If successful, respond with the content of the file
        res.send(data);
    });
});

// Define a catch-all route for any other paths not defined above
app.all('*', (req, res) => {
    // Respond with a 404 status and a message indicating the route is not found
    res.status(404).send('Route not found');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log("Server started at port ", port);
});
