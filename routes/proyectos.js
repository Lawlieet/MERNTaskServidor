const express = require('express')
const router = express.Router();
const proyectoController = require('../controllers/proyectoController')
const auth = require ('../middleware/auth')
const {check }  = require ('express-validator')

// Crea Proyectos
// api/proyectos
router.post('/',
    auth,
    [
        check('nombre','El nombre del proyecto es oblgatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

// Obtener todos los proyectos
router.get('/',
    auth,
    proyectoController.obtenerProyectos
);

// Editar proyecto

router.put('/:id',
    auth,
    [
        check('nombre','El nombre del proyecto es oblgatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

// Eliminar un proyecto
router.delete('/:id',
    auth,
    proyectoController.eliminarProyecto
)

module.exports = router;