import {Router} from 'express';
import {login,register,logout,profile} from "../controllers/auth.controller.js"
import {authRequerida} from '../middlewares/validarToken.js';

const router = Router()

router.post('/register', register);
router.post('/login', login);
router.post('/logout',logout);
router.get('/profile',authRequerida, profile);

export default router;