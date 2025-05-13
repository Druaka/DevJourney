require('dotenv').config({path: '.env.local'});

const mongoose = require('mongoose');
const TCGdex = require('@tcgdex/sdk').default;
const {SetModel} = require('./schemas');
const uri = process.env.MONGODB_URI;

// Instantiate the SDK with your preferred language
const tcgdex = new TCGdex('en');

async function fetchData() {
    try {
        console.log('Fetching data via TCGdex SDK');
        const sets = await tcgdex.set.list();
        console.log('Data fetched via TCGdex SDK');
        return sets;
    } catch (error) {
        console.error('Error fetching data via TCGdex SDK:', error);
        return [];
    }
}

async function storeData(sets) {
    try {
        await SetModel.insertMany(sets);
        console.log('Data successfully stored in MongoDB');
    } catch (error) {
        console.error('Error storing data in MongoDB:', error);
    }
}

mongoose.connect(uri, {}).then(async () => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
