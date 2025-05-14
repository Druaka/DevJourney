require('dotenv').config({path: '.env.prod'});

const mongoose = require('mongoose');
const TCGdex = require('@tcgdex/sdk').default;
const throttledQueue = require('throttled-queue');
const {TcgpSetModel, PtcgSetModel} = require('./schemas');
const {Query} = require("@tcgdex/sdk");
const uri = process.env.MONGODB_URI;

// Instantiate the SDK with your preferred language
const tcgdex = new TCGdex('en');
const throttle = throttledQueue(500, 10);

async function fetchData() {
    try {
        // Fetch all Pokémon TCG sets
        const ptcgQuery = Query.create().sort("releaseDate", "DESC").not.equal("serie.id", "tcgp");
        const ptcgSetResumes = await tcgdex.set.list(ptcgQuery);
        const ptcgSets = await fetchSetDetails(ptcgSetResumes);

        // Fetch all Pokémon Trading Card Game Pocket sets
        const tcgpQuery = Query.create().sort("releaseDate", "DESC").equal("serie.id", "tcgp");
        const tcgpSetResumes = await tcgdex.set.list(tcgpQuery);
        const tcgpSets = await fetchSetDetails(tcgpSetResumes);

        return {ptcgSets, tcgpSets};
    } catch (error) {
        console.error('Error fetching data via TCGdex SDK:', error);
        return {cards: [], sets: [], series: []};
    }
}

async function fetchSetDetails(setResumes) {
    console.log(`Fetched ${setResumes.length} set resumes`);
    console.log('Fetching full set details');
    const sets = [];
    for (const setResume of setResumes) {
        await throttle(async () => {
            try {
                const set = await tcgdex.set.get(setResume.id);
                sets.push(set);
            } catch (error) {
                console.error(`Error fetching set ${setResume.id}:`, error);
            }
        });
    }
    return sets;
}

mongoose.connect(uri, {}).then(async () => {
    console.log('Connected to MongoDB');

    // Drop the database if it exists
    await mongoose.connection.db.dropDatabase();
    console.log('Database dropped');

    const {ptcgSets, tcgpSets} = await fetchData();
    await storePtcgSets(ptcgSets);
    await storeTcgpSets(tcgpSets);
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

async function storePtcgSets(ptcgSets) {
    try {
        await PtcgSetModel.insertMany(ptcgSets);
        console.log('PtcgSets successfully stored in MongoDB');
    } catch (error) {
        console.error('Error storing PtcgSets in MongoDB:', error);
    }
}

async function storeTcgpSets(tcgpSets) {
    try {
        await TcgpSetModel.insertMany(tcgpSets);
        console.log('TcgpSets successfully stored in MongoDB');
    } catch (error) {
        console.error('Error storing TcgpSets in MongoDB:', error);
    }
}
