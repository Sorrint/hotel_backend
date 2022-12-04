import { Router } from 'express';
import BookingController from '../controllers/booking.controller.js';

const router = new Router();

router.post('/', BookingController.create);
router.get('/', BookingController.getAll);
router.get('/:userId', BookingController.getByUserId);
router.delete('/:id', BookingController.delete);

export default router;
