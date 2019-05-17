const Product = require('../models/paytm-product');

exports.getAddProduct = (req, res, next) => {
  res.render('paytm', {
    pageTitle: 'Paytm',
    path: '/paytm',
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
  res.redirect('/paytm');
};

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('view-products', {
      prods: products,
      pageTitle: 'Paytm Transaction',
      path: '/paytm'
    });
  });
};
