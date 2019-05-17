const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const walletController = require('../controllers/wallet-controller');
const sbiController = require('../controllers/sbi-controller');
const paytmController = require('../controllers/paytm-controller');

const router = express.Router();

// /add-product => GET

router.get('/wallet', walletController.getAddProduct);
//router.get('/wallet-add', walletController.getAddProduct);
router.get('/Wallet-products', walletController.getProducts);
router.post('/wallet', walletController.postAddProduct);

router.get('/paytm', paytmController.getAddProduct);
router.get('/Paytm-products', paytmController.getProducts);
router.post('/paytm', paytmController.postAddProduct);

router.get('/sbi', sbiController.getAddProduct);
router.get('/Bank-products', sbiController.getProducts);
router.post('/sbi', sbiController.postAddProduct);

// router.get('/', adminController.getAddProduct);

// router.get('/paytm', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'paytm.html'));
// });

// router.post('/paytm', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'paytm.html'));
// });

// router.post('/sbi', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'sbi.html'));
// });

// router.get('/sbi', (req, res, next) => {
//   res.sendFile(path.join(rootDir, 'views', 'sbi.html'));
// });

module.exports = router;


// // /admin/add-product => GET
// router.get('/add-product', adminController.getAddProduct);

// // /admin/products => GET
// router.get('/products', adminController.getProducts);

// // /admin/add-product => POST
// router.post('/add-product', adminController.postAddProduct);
