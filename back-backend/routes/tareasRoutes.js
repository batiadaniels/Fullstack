const express = require('express')
const router = express.Router()
const {getTareas, postTareas, putTareas, deleteTareas} = require('../controllers/tareasController')

 
//Obtener Tareas
router.get('/',getTareas)

//Crear una Tarea
router.post('/', postTareas)

//Modificar una Tarea
router.put('/:id', putTareas)

//Eliminar una Tarea
router.delete('/:id', deleteTareas)

//Otra opcion para escribir el codigo de arriba
/*router.route('/').get(getTareas).post(postTareas)
router.route('/:id').put(putTareas).delete(deleteTareas)*/

module.exports = router