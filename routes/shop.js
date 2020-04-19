const path = require('path');

const express = require('express');

const router = express.Router();
const shopController = require('../controllers/shop');

router.get('/', shopController.getIndex);

router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postProduct);

router.get('/orders', shopController.getOrders);

router.get('/products', shopController.getProducts);

router.get('/products/:productId', shopController.getProduct);

router.get('/checkout', shopController.getCheckout);

router.post('/delete-cart-item', shopController.postDeleteProdcutFromCart)

module.exports = router;