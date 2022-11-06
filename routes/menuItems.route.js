import { Router } from 'express';
import MenuItemsController from '../controllers/menuItems.controller.js';

const router = new Router();

router.post('/', MenuItemsController.create);
router.get('/', MenuItemsController.getAll);
router.put('/', MenuItemsController.update);
router.delete('/:id', MenuItemsController.delete);

export default router;
