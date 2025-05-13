const express = require('express');
const cors = require('cors');
const pingRoutes = require('./routes/ping.js');
const setsRoutes = require('./routes/pokemontcg/sets.js');
const cardsRoutes = require('./routes/pokemontcg/cards.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Import the database connection
require('./db.js');

// Use the routes
app.use('/api/ping', pingRoutes);
app.use('/api/pokemontcg/sets', setsRoutes);
app.use('/api/pokemontcg/cards', cardsRoutes);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
