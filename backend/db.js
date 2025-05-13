require('dotenv').config({path: '.env.local'});

const mongoose = require('mongoose');
const TCGdex = require('@tcgdex/sdk').default;
const {CardModel, SetModel, SerieModel} = require('./schemas');
const uri = process.env.MONGODB_URI;

// Instantiate the SDK with your preferred language
const tcgdex = new TCGdex('en');

async function fetchData() {
    try {
        console.log('Fetching data via TCGdex SDK');
        const cards = await tcgdex.card.list();
        const sets = await tcgdex.set.list();
        const series = await tcgdex.serie.list();
        console.log('Data fetched via TCGdex SDK');
        return {cards, sets, series};
    } catch (error) {
        console.error('Error fetching data via TCGdex SDK:', error);
        return {cards: [], sets: [], series: []};
    }
}

async function storeData(cards, sets, series) {
    try {
        await CardModel.insertMany(cards);
        await SetModel.insertMany(sets);
        await SerieModel.insertMany(series);
        console.log('Data successfully stored in MongoDB');
    } catch (error) {
        console.error('Error storing data in MongoDB:', error);
    }
}

mongoose.connect(uri, {}).then(async () => {
    console.log('Connected to MongoDB');

    // Drop the database if it exists
    await mongoose.connection.db.dropDatabase();
    console.log('Database dropped');

    const {cards, sets, series} = await fetchData();
    await storeData(cards, sets, series);
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
