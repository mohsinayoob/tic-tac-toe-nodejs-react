const express = require('express');
const apiMethods = require('../methods/controller/apiController');
const router = express.Router();

router.post('/winner',
  apiMethods.gameWinner
);

router.post('/move',
  apiMethods.nextMove
);

module.exports = router;