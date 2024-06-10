import gameController from '../controller/gameController';
import { Router } from 'express';

const router = Router();

router.post('/register', gameController.register);
router.delete('/:id', gameController.cancel);
router.get('/', gameController.getall);
router.put('/update/:id', gameController.update);
router.get('/:id', gameController.getOne);

export default router;
