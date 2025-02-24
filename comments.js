// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send('This is the root route.');
});

// Create a route
app.get('/comments', (req, res) => {
    res.send('This is the comments route.');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});