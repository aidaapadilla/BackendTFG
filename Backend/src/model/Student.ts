import { Schema, model } from 'mongoose';

const Student = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
	email: { type: String, unique: true, required: true },
    myGames: [{ type: Schema.Types.ObjectId, ref: 'Game'}] //bookings
});

export default model('Student', Student);