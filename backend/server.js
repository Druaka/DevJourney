const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Import the database connection
require('./db.js');

// Simple test route
app.get('/api/ping', (req, res) => {
    res.json({ message: 'Pong from backend' });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
