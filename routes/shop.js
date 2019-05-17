const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const walletController = require('../controllers/wallet-controller');

router.get('/', walletController.getAddProduct);

module.exports = router;
