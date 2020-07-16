const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tareaController.js');
const auth = require ('../middleware/auth');
const {check }  = require ('express-validator');

// crrear una tarea
//api/tareas
router.post('/',
    auth,
    [
        check('nombre','El nombre es obligatorio').not().isEmpty(),
        check('proyecto','El proyecto es obligatorio').not().isEmpty()
    ],
    tareaController.creaTarea

)

// Obtener las tareas por proyecto
router.get('/',
    auth,
    tareaController.obtenerTareas
)

// Actualizar una tarea
router.put('/:id',
    auth,
    tareaController.actualizarTarea
);

// Eliminar una tarea
router.delete('/:id',
    auth,
    tareaController.eliminarTarea
)

module.exports = router;