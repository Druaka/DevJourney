require('dotenv').config({path: '.env.prod'});

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI;
const initializeUsers = require('./scripts/initializeData.js');


mongoose.connect(uri, {}).then(async () => {
    console.log('Connected to MongoDB');

    // Check if the "users" collection exists
    const collections = await mongoose.connection.db.listCollections({name: 'users'}).toArray();
    if (collections.length === 0) {
        // Create the "users" collection if it does not exist
        await User.createCollection();
        console.log('Created "users" collection');
    } else {
        console.log('"users" collection already exists');
    }

    // Initialize users
    await initializeUsers();
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
