const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'sbi.json'
);

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(date , desc , expense ,add) {
    this.date = date;
    this.desc = desc;
    this.expense = expense;
    this.add = add;

  }

  save() {
    getProductsFromFile(sbi => {
      sbi.push(this);
      fs.writeFile(p, JSON.stringify(sbi), err => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  
};
