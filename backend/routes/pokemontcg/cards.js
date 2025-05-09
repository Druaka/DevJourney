const express = require('express');
const pokemon = require('pokemontcgsdk');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const {q, page = 1, pageSize = 250, orderBy, select} = req.query;
        const params = {q, page, pageSize, orderBy, select};
        const result = await pokemon.card.where(params);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch cards data'});
    }
});

module.exports = router;
