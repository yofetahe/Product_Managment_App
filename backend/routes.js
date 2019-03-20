const controllers = require('./controllers');
const path = require('path');

module.exports = app => {

    app
        .get('/api/products', controllers.getAllProducts)
        .get('/api/products/:id', controllers.getProductById)
        .post('/api/products', controllers.addProduct)
        .put('/api/products/:id', controllers.updateProduct)
        .delete('/api/products/:id', controllers.deleteProduct)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });
}