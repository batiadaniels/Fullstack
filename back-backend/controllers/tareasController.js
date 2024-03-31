const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareaModel')

const getTareas = asyncHandler( async (req, res) => {

    const tareas  = await Tarea.find({user: req.user._id})
    res.status(200).json(tareas)
})

const postTareas = asyncHandler( async (req, res) => {
    if(!req.body.texto){
        res.status(400)
        throw new Error('No escribiste una descripcion');
    }
    

    const tarea = await Tarea.create({
        texto: req.body.texto,
        user: req.user._id
    })


    res.status(201).json(tarea)
})

const  putTareas = asyncHandler ( async (req, res) =>{

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(400)
        throw new Error ('La tarea no existe')
    }

    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new:true})
    
    
    res.status(200).json(updatedTarea)
})

const  deleteTareas = asyncHandler( async (req, res) =>{

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(400)
        throw new Error ('La tarea no existe')
    }

    //Hay dos dormas de eliminar un registro en mongoose
    //1.
     await Tarea.deleteOne(tarea)     
    //2. const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)

    res.status(200).json({ id: req.params.id})
})


module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}