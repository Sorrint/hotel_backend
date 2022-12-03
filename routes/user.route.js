import { Router } from 'express';
import UserController from '../controllers/user.controller.js';
const router = new Router();

router.get('/', UserController.getAll);

export default router;
