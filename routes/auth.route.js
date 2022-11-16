import { Router } from 'express';
import AuthController from '../controllers/auth.controller.js';

const router = new Router();

router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.login);
router.get('/users', AuthController.getAll);

export default router;
