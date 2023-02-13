const express = require('express');
const addition = require('./addition');
const multiplication = require('./multiplication');
const router = express.Router();


router.get('/', (req, res) => res.json(addition));
router.get('/', (req, res) => res.json(multiplication));

module.exports = router;

