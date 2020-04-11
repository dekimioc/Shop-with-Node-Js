const path = require('path');

const rootDir = require('../helpers/path');

const express = require('express');

const router = express.Router();
const products = [];

// admin/add-product => GET request

router.get('/add-product', (req, res, next) => {
    res.render('add-product', { pageTitle: "Add product", path: "/add-product", formsCSS: true, productCSS: true, activeAddProduct: true });
});

// admin/add-product => POST request
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect("/");
})

exports.routes = router;
exports.products = products;
