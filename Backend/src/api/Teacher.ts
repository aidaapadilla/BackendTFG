import teacherController from '../controller/teacherController';
import { Router } from 'express';

const router = Router();

router.post('/register', teacherController.register); // ok
router.post('/login', teacherController.login); // ok
router.get('/:id', teacherController.profile);
router.get('/', teacherController.getall);
router.put('/update/:id', teacherController.update);
router.delete('/:id', teacherController.deleteTeacher);
router.post('/:id/students', teacherController.getAllStudents)
router.get('/getTeacherEmail', teacherController.getOneByEmail)

// Funció per poder afegir els alumnes a la array del profe

export default router;