const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, datosUser } = require('../controllers/usersControllers')


router.post( '/', registrarUser)
router.post( '/login', loginUser)
router.get( '/datos', datosUser)



module.exports = router 