const express = require('express');
const cors = require('cors');
const pingRoutes = require('./routes/ping.js');
const setsPtcgRoutes = require('./routes/ptcg-sets.js');
const setsTcgpRoutes = require('./routes/tcgp-sets.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Import the database connection
require('./db.js');

// Use the routes
app.use('/api/ping', pingRoutes);
app.use('/api/tcgdex/ptcg-sets', setsPtcgRoutes);
app.use('/api/tcgdex/tcgp-sets', setsTcgpRoutes);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
