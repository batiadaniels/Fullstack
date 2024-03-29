const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require ('../models/userModel')


//Registrar un usuario nuevo
const registrarUser  = asyncHandler(async (req,res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Faltan datos')
    }

    //Verificamos si el usuario existe
    const userExist = await User.findOne({ email })
    if (userExist) {
        res.status(400)
        throw new Error('Ese usuario ya existe en la BD')
    } else{
        //hash password
    }

    res.status(201).json({message: 'Usuario creado'})
})
//Hacer Login
const loginUser  = asyncHandler(async (req,res) => {
    res.status(201).json({message: 'Login Usuario'})
})
//Mostrar los datos del usuario 
const datosUser  = asyncHandler(async (req,res) => {
    res.status(201).json({message: 'Mis datos de usuario'})
})



module.exports = {
    registrarUser,
    loginUser,
    datosUser
    }