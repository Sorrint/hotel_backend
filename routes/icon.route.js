import { Router } from 'express';
import IconController from '../controllers/icon.controller.js';

const router = new Router();

router.post('/', IconController.create);
router.get('/', IconController.getAll);
// router.get('/:id', IconController.getOne);
// router.put('/', IconController.update);
// router.delete('/:id', IconController.delete);

export default router;
