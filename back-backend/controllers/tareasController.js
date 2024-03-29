const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler( async (req, res) => {

    const tareas  = await Tarea.find()
    res.status(200).json(tareas)
})

const postTareas = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('No escribiste una descripcion');
    }
    

    const tarea = await Tarea.create({
        texto: req.body.texto
    })


    res.status(201).json(tarea)
})

const  putTareas = asyncHandler ( async (req, res) =>{
    res.status(200).json({ message: `Se modifico la tarea ${req.params.id}`})
})

const  deleteTareas = asyncHandler( async (req, res) =>{
    res.status(200).json({ message: `Se elimino la tarea ${req.params.id}`})
})


module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}