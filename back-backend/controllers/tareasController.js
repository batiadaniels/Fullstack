const getTareas = (req, res) => {
    res.status(200).json({ message: 'Obtener tareas'})
}

const postTareas = (req, res) => {
    res.status(201).json({ message: 'Tarea Creada'})
}

const  putTareas = (req, res) =>{
    res.status(200).json({ message: `Se modifico la tarea ${req.params.id}`})
}

const  deleteTareas = (req, res) =>{
    res.status(200).json({ message: `Se elimino la tarea ${req.params.id}`})
}
module.exports = {
    getTareas,
    postTareas,
    putTareas,
    deleteTareas
}