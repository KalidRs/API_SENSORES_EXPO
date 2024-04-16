import { Router } from "express";
import { getAll,insertOne } from '../controllers/datos.controller.js';


const router = Router();

// Ruta para obtener todos los SENSORES
router.get('/', getAll);

// Ruta para insertar SENSORES
router.post('/', insertOne);


export default router;
