import mongoose, { Schema, Document } from 'mongoose';
import { IStudent } from './Student';


const TeacherSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    myStudents: [{ type: Schema.Types.ObjectId, ref: 'Student' }] // bookings
});

export interface ITeacher extends Document {
    name: string;
    password: string;
    email: string;
    myStudents: IStudent[];
}

export default mongoose.model<ITeacher>('Teacher', TeacherSchema)