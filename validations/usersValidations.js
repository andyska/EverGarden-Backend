const Joi = require ('joi')

const express = require('express')
const validator = require ('express-joi-validation').createValidator()
const usersController = require('../controllers/usersController.js')
const usersValidation = require ('../validations/usersValidations')

const usersValidationBody = Joi.object({
    firstName: Joi.string().min(1).alphanum().required(),
    lastName : Joi.string().min(1).alphanum().required(),
    userName: Joi.string(), //no lo pongo required porque en realidad nosotros despues lo pisamos con la logica
    password: Joi.string().alphanum().min(3).max(10).required(),
    email: Joi.string().email().required(), 
    type: Joi.string().required() //quizas aca podemos aramr un booleano que pregunte admin? V o F

})

const usersValidationQuery = Joi.object({
    firstName: Joi.string().min(1).alphanum(),
    lastName: Joi.string().min(1).alphanum(),
    userName: Joi.string().min(3),
    email: Joi.string().email(),
    type: Joi.string()
})
      
const usersValidationParams = Joi.object({
    userId:Joi.string().length(24).required()
})
      
const usersValidationPut = Joi.object({
    firstName: Joi.string().min(1).alphanum(),
    lastName: Joi.string().min(1).alphanum(),
    userName: Joi.string().min(3),
    password: Joi.string().alphanum().min(3).max(10),
    email: Joi.string().email(),
    type: Joi.string()
})
      
const usersValidationLogin = Joi.object({
    userName: Joi.string().required(),
    password: Joi.string().required()
})
      
module.exports = {usersValidationBody, usersValidationQuery ,usersValidationParams, usersValidationPut,usersValidationLogin}