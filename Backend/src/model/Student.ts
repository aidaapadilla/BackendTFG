import mongoose, { Schema, Document } from 'mongoose';

const StudentSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    id_teacher: { type: String, required: true }
});

export interface IStudent extends Document {
    name: string;
    password: string;
    email: string;
    id_teacher: string;
}

export default mongoose.model<IStudent>('Student', StudentSchema);