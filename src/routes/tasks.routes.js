import { Router } from "express";
import { authRequerida } from "../middlewares/validarToken.js";

const router = Router()
router.get('/tasks', authRequerida, (req,res)=>{
    res.send("Enviando tarea.")
})

export default router;