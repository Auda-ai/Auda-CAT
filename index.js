const express = require('express');
const addition = require('./addition');
const multiplication = require('./multiplication');
const router = express.Router();


router.get('/', (req, res) => res.send(addition));
router.get('/', (req, res) => res.send(multiplication));

module.exports = router;

