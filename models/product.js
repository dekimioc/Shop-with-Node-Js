const Cart = require('./cart');
const db = require('../helpers/database');

module.exports = class Product {
    constructor(id, title, imageUrl, price, description) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        return db.execute('INSERT INTO products (title, price, description, imageUrl) value(?, ?, ?, ?)',
            [this.title, this.price, this.imageUrl, this.description]
        )
    }

    static delete(id) {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ? ', [id])
    }
}