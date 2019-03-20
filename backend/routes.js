const controllers = require('./controllers');

module.exports = app => {

    app
        .get('/api/products', controllers.getAllProducts)
        .get('/api/products/:id', controllers.getProductById)
        .post('/api/products', controllers.addProduct)
        .put('/api/products/:id', controllers.updateProduct)
        .delete('/api/products/:id', controllers.deleteProduct)
}