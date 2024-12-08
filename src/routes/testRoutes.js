const express = require('express');
const { createTest } = require('../controllers/testController');

const router = express.Router();

router.post('/createTest', createTest);

module.exports = router;