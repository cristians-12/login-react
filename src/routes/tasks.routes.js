import { Router } from "express";
import { authRequerida } from "../middlewares/validarToken.js";
import {
  borrarTask,
  crearTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/tasks", authRequerida, getTasks);
router.post("/tasks", authRequerida, crearTask);
router.delete("/tasks/:id", authRequerida, borrarTask);
router.get("/tasks/:id", authRequerida, getTask);
router.put("/tasks/:id", authRequerida, updateTask);

export default router;
