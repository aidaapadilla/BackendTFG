import studentController from '../controller/studentController';
import { Router } from 'express';

const router = Router();

router.post('/register', studentController.register);  // OK
router.post('/login', studentController.login); // OK
router.get('/:id', studentController.profile); // OK
router.get('/', studentController.getall); // OK
router.put('/update/:id', studentController.update); // OK
router.delete('/:id', studentController.deleteStudent); // OK

export default router;