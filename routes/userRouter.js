//archivo especifico para que maneje los endpoints de usuarios
const express = require('express')
const usersController = require('../controllers/usersController')
const validator = require ('express-joi-validation').createValidator()
const usersValidation = require ('../validations/usersValidations')

const routes = (User)=>{
    const userRouter = express.Router()
    const controller = usersController(User)

    userRouter.route('/users')
      .get(
        validator.query(usersValidation.usersValidationQuery), 
        controller.getUsers
      ) 
      .post(
        validator.body(usersValidation.usersValidationBody), 
        controller.postUser
      )

    userRouter.route('/users/:userId')
      .get(
        validator.params(usersValidation.usersValidationParams), 
        controller.getUserById
      )
      .put(
        validator.params(usersValidation.usersValidationParams), 
        validator.body(usersValidation.usersValidationPut), 
        controller.putUser
      )
      .delete(
        validator.params(usersValidation.usersValidationParams), 
        controller.deleteUser
      )
        
    userRouter.route('/users/login')
      .post(
        validator.body(usersValidation.usersValidationLogin),
        controller.postUserLogin
      )
     
  //salida de la funcion de rutas
  return userRouter
}

//exporto la funcion para poder convocarla
module.exports = routes