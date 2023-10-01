import gameController from '../controller/gameController';
import { Router } from 'express';

const router = Router();

router.post('/', gameController.register); // OK
router.delete('/:id', gameController.cancel); // OK
router.get('/', gameController.getall); // OK
router.put('/update/:id', gameController.update); // OK
router.put('/updateAddress/:id', gameController.updateGame); // OK
router.get('/:id',gameController.getOne); // OK

export default router;
