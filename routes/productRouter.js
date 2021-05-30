const express = require('express')
const validator = require ('express-joi-validation').createValidator()
const productsController = require('../controllers/productsController.js')
const productsValidation = require ('../validations/productsValidations')


const routes = (Product) => {
  const productRouter = express.Router()
  const controller = productsController(Product)

  productRouter.route('/admin/products')
    .get (validator.query(productsValidation.productsValidationQuery),controller.getProducts)    
    .post (validator.body(productsValidation.productsValidationBody),controller.postProducts) 

  productRouter.route('/admin/products/:productId')
  .get(validator.params(productsValidation.productsValidationParams),controller.getProductById)
  .put(validator.params(productsValidation.productsValidationParams),validator.body(productsValidation.productsValidationPut),controller.putProductById)
  .delete(validator.params(productsValidation.productsValidationParams), controller.deleteProductById)

  return productRouter
}

module.exports = routes