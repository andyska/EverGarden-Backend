const express = require('express')
//const validator = require ('express-joi-validation').createValidator()
const productsController = require('../controllers/productsController.js')
//const booksValidation = require ('../validations/booksValidations')

const routes = (Product) => {
  const productRouter = express.Router()
  const controller = productsController(Product)

  productRouter.route('/products')
    .get (controller.getProducts)    
    .post (controller.postProducts) 

/*
    .get(validator.query(booksValidation.booksValidationQuery),controller.getBooks)
    .post(validator.body(booksValidation.booksValidationBody),controller.postBook)
*/

  productRouter.route('/products/:productId')
  
  .get(controller.getProductById)
  //.put(controller.putProductById)
  .delete(controller.deleteProductById)

  /*
    .get(validator.params(booksValidation.booksValidationParams),controller.getBookByID)

    .put(validator.params(booksValidation.booksValidationParams),validator.body(booksValidation.booksValidationPut),controller.putBookById)

    .delete(validator.params(booksValidation.booksValidationParams),controller.deleteBookById)*/


  return productRouter
}

module.exports = routes