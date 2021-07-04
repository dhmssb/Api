const router = require ('express-promise-router')()
const productController = require ('../controllers/product.controller')


//localhost:3010/api/products
router.route('/products')
    .post(productController.createProduct)
    .get(productController.listAll)

router.route('/products/:id')
    .get(productController.findById)
    .put(productController.updateById)
    .delete(productController.deleteById)

module.exports = router