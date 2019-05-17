const Product = require('../models/wallet-product');

exports.getAddProduct = (req, res, next) => {
  res.render('wallet', {
    pageTitle: 'Wallet',
    path: '/wallet',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req, res, next) => {
  const date = req.body.date;
  const desc = req.body.description;
  const expense = req.body.expense_amount;
  const add = req.body.add_amount;
  const product = new Product(date, desc, expense ,add);
  product.save();
  res.redirect('/wallet');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(wallet => {
    res.render('view-products', {
      prods: wallet,
      pageTitle: 'Wallet Transactions',
      path: '/wallet'
    });
  });
};
