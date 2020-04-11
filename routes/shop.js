const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');
const adminData = require('../routes/admin');
const router = express.Router();

router.get('/', (req, res, next) => {
    const products = adminData.products;
    res.render('shop', {
        prods: products,
        pageTitle: 'Node Shop',
        path: "/shop",
        hasProducts: products.length > 0,
        activeShop: true,
        productCss: true
    });
});

module.exports = router;