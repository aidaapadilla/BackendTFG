import mongoose, { Schema, Document } from 'mongoose';

const StudentSchema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true }
});

export interface IStudent extends Document {
    name: string;
    password: string;
    email: string;
}

export default mongoose.model<IStudent>('Student', StudentSchema);