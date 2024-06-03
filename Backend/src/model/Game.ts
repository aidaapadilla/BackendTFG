import { Schema, model } from 'mongoose';

const Game = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    windRose: String,
    airportCapacity: String,
    Location: String,
    ReferenceTemperature: Number
});

export default model('Game', Game);
