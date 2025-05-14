const express = require('express');
const router = express.Router();
const {TcgpSetModel} = require('../schemas.js');

router.get('/', async (req, res) => {
    try {
        const {q, orderBy, select} = req.query;
        const query = q ? {name: new RegExp(q, 'i')} : {};
        const options = {
            sort: orderBy ? {[orderBy]: 1} : {},
            select: select ? select.split(',').join(' ') : ''
        };

        const result = await TcgpSetModel.find(query, options.select).sort(options.sort);
        res.json(result);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch sets data'});
    }
});

module.exports = router;
