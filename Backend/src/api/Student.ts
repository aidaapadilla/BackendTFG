import studentController from '../controller/studentController';
import { Router } from 'express';

const router = Router();

router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/:id', studentController.profile);
router.get('/', studentController.getall);
router.put('/update/:id', studentController.update);
router.delete('/:id', studentController.deleteStudent);

export default router;