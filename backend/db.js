require('dotenv').config({path: '.env.prod'});

const mongoose = require('mongoose');
const pokemon = require('pokemontcgsdk');
const uri = process.env.MONGODB_URI;

// Initialize PokemonTCG configuration
pokemon.configure({apiKey: process.env.POKEMON_API_KEY});

mongoose.connect(uri, {}).then(async () => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
