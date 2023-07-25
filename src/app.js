const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');

// Initiate expresss
const app = express();

// Parse request
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Setup Cors
const corsOption = {
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    exposedHeaders: [
        "Authorization",
        "Content-Type",
        "x-auth-token",
        "authorization"
    ],
    credentials: true
};
app.use(cors(corsOption));

// Index route
app.get('/', function (req, res) {
    res.send('Welcome to the beginning of nothingness');
});

// Include app routes
app.use(require("./routes/video"));

// App port
const port = parseInt(process.env.PORT, 10) || 3000;
// const port = 5000;
app.set('port', port);

// Server setup
const server = http.createServer(app);
server.listen(port);
server.timeout = 500000; // Miliseconds

console.info("oks", Date());

module.exports = app;