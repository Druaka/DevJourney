const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    id: String,
    image: String,
    name: String,
});

const setSchema = new mongoose.Schema({
    id: String,
    logo: String,
    name: String,
    releaseDate: String,
    symbol: String,
    tcgOnline: String,
    cardCount: {
        firstEd: Number,
        holo: Number,
        normal: Number,
        official: Number,
        reverse: Number,
        total: Number,
    },
    serie: {
        id: String,
        logo: String,
        name: String,
    },
    cards: [cardSchema],
});

const SetModel = mongoose.model('Set', setSchema);

module.exports = {
    SetModel,
};
