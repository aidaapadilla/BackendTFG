import teacherController from '../controller/teacherController';
import { Router } from 'express';

const router = Router();

// FALTA VERIFY
router.post('/register', teacherController.register); 
router.post('/login', teacherController.login);
router.get('/:id', teacherController.profile); 
router.get('/', teacherController.getall);  
router.put('/forgotpass/:id', teacherController.changePass); 
router.put('/update/:id', teacherController.update); 
router.delete('/:id', teacherController.deleteTeacher); 

export default router;