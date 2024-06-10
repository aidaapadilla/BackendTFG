import Student from '../model/Student';
import jwt from 'jsonwebtoken';
import CryptoJS from 'crypto-js';
import { Request, Response } from 'express';
import Teacher from '../model/Teacher';

const register = async (req: Request, res: Response) => {
	const { name, email, password, id_teacher } = req.body;
	const teacher = Teacher.findById({ id_teacher });

	// password = CryptoJS.AES.encrypt(password, 'secret key 123').toString();
	const newStudent = new Student({
		name,
		email,
		password,
		id_teacher
	});
	try {
		await newStudent.save();
		await teacher.updateOne(
			{ _id: id_teacher },
			{ $addToSet: { myStudents: newStudent._id } }
		);
		res.status(200).json({ auth: true });
	}
	catch (err) {
		res.status(500).json({ message: 'Could not create Student', err });
	}
	res.status(200).json({ auth: true });
};

const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	try {
		const student = await Student.findOne({ email });
		// const validPassword = await Student.findOne({ password });
		// const validPassword = CryptoJS.AES.decrypt(student.password as string, 'secret key 123').toString(CryptoJS.enc.Utf8);
		if (student.password !== password) {
			return res.status(401).json({ auth: false });
		}
		res.json({ auth: true });
	}
	catch (err) {
		res.status(404).send('Cant find student');
	}
};

const profile = async (req: Request, res: Response) => {
	try {
		const student = await Student.findById(req.params.id, { password: 0 }); // .populate('myParkings').populate('myBookings');
		res.json(student);
	}
	catch (err) {
		return res.status(404).send('The student does not exist');
	}
};

const getall = async (req: Request, res: Response) => {
	const students = await Student.find();
	res.json(students);
};

const update = async (req: Request, res: Response) => {
	const _id = req.params.id;
	const { name, email } = req.body;
	try {
		const student = await Student.findByIdAndUpdate(_id, {
			name,
			email
		}, { new: true });
		return res.json(student);
	}
	catch (err) {
		res.status(400).json({ message: 'Student not found', err });
	}
}

const deleteStudent = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
		await Student.findByIdAndDelete({ _id });
		res.status(200).json({ status: 'Student deleted' });
	}
	catch (err) {
		res.status(500).json({ message: 'Student not found', err });
	}
}

export default {
	register,
	login,
	profile,
	getall,
	update,
	deleteStudent
};