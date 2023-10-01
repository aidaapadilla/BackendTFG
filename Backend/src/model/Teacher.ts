import { Schema, model } from 'mongoose';

const Teacher = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
	email: { type: String, unique: true, required: true },
    myStudents: [{ type: Schema.Types.ObjectId, ref: 'Student'}] //bookings
});

export default model('Teacher', Teacher);