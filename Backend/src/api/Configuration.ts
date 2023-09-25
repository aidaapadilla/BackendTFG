import configurationController from '../controller/configurationController';
import { Router } from 'express';
const router = Router();

router.post('/', configurationController.newConfiguration); // email of the user needed
router.delete('/:id', configurationController.cancel);
router.get('/', configurationController.getall);
router.get('/:id', configurationController.getOne);
router.put('/update/:id', configurationController.update);

export default router;