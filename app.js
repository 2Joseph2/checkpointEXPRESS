const express = require('express');
const path = require('path');
const app = express();
const time = require("./time")
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public/style')));

//middleware
app.use(time);

// Routing
app.get('/',time, (req, res) => {
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/contact.html'));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/service.html')); // Ensure file name matches
});

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Listening on port ${port}`);
    }
});
