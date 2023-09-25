import { Schema, model } from 'mongoose';

const Configuration = new Schema({
	customer: { type: Schema.Types.ObjectId, ref: "User" },
    language: String,
	letterSize: Number, // Aqui em refereixo al tamany de la lletra
    lastChange: Date
});

export default model('Configuration', Configuration);