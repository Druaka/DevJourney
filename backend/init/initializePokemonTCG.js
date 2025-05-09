const pokemon = require('pokemontcgsdk');
const fs = require('fs');
const path = require('path');

async function initializePokemonTCG() {
    const tempDir = path.join(__dirname, '../temp');

    // Create the temp directory if it doesn't exist
    // if (!fs.existsSync(tempDir)) {
    //     fs.mkdirSync(tempDir);
    // }

    pokemon.configure({apiKey: process.env.POKEMON_API_KEY});

    pokemon.set.all().then(result => {
        const data = JSON.stringify(result, null, 2); // Convert the result to JSON string
        // fs.writeFile(path.join(tempDir, 'pokemon_sets.json'), data, (err) => {
        //     if (err) {
        //         console.error('Error writing to pokemon_sets.json', err);
        //     } else {
        //         console.log('Data saved to pokemon_sets.json');
        //     }
        // });
    });

    pokemon.supertype.all().then(result => {
        const data = JSON.stringify(result, null, 2); // Convert the result to JSON string
        // fs.writeFile(path.join(tempDir, 'pokemon_supertype.json'), data, (err) => {
        //     if (err) {
        //         console.error('Error writing to pokemon_supertype.json', err);
        //     } else {
        //         console.log('Data saved to pokemon_supertype.json');
        //     }
        // });
    });
}

module.exports = initializePokemonTCG;
