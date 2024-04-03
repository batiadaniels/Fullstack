const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asyncHandler(async (req,res,next) => {

    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try{
            //obtenemos el token
            token = req.headers.authorization.split(' ')[1]            
            
            //verificamos la firma del token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Obtener datos del usuario
            req.user = await User.findById(decoded.id).select('-password')
        } catch (error) {
            console.error(error);
            return res.status(401).send({ error: 'Acceso no autorizado' });
        }
    }

    if (!token) {
        return res.status(401).send({ error: 'Acceso no autorizado, no se proporcionó ningún token' });
    }
    
       /* }catch (error) {
            console.log(error)
            res.status(401)
            throw new Error ("Acceso no autorizado")
        }
        
    }

    if(!token){
        res.status(401)
        throw new Error ("Acceso no autorizado, no se proporciono ningun token")
    }*/

    next() // Llama a la siguiente función de middleware en Express
})


module.exports = { protect }

0, 1
//[Bearer, xxx.yyy.zzz] 