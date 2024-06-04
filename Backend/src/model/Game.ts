import mongoose, { Schema, Document } from 'mongoose';
import { IStudent } from './Student';

const GameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    windRose: String,
    airportCapacity: String,
    Location: String,
    referenceTemperature: Number
});

export interface IGame extends Document {
    user: IStudent;
    windRose: string;
    airportCapacity: string;
    Location: string;
    referenceTemperature: number;
}

export default mongoose.model<IGame>('Game', GameSchema);
