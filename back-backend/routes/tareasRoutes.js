const express = require('express')
const router = express.Router()
const {getTareas, postTareas, putTareas, deleteTareas} = require('../controllers/tareasController')
const {protect} = require('../middleware/authMiddleware')
 
//Obtener Tareas
router.get('/', protect, getTareas)

//Crear una Tarea
router.post('/', protect, postTareas)

//Modificar una Tarea
router.put('/:id', protect, putTareas)

//Eliminar una Tarea
router.delete('/:id', protect, deleteTareas)

//Otra opcion para escribir el codigo de arriba
/*router.route('/').get(protect, getTareas).post(protect, postTareas)
router.route('/:id').put(protect, putTareas).delete(protect, deleteTareas)*/

module.exports = router