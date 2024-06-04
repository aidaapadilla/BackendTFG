import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import Student from "./api/Student";
import Game from "./api/Game";
import Teacher from "./api/Teacher";

const app = express();
const port = process.env.PORT || 5432;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/students', Student);
app.use('/api/games', Game);
app.use('/api/teachers', Teacher);

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});

mongoose.set('strictQuery', false);  // Configura strictQuery en Mongoose
const mongoUrl = 'mongodb://127.0.0.1:27017/TFG';  // URL de conexión actualizada

mongoose.connect('mongodb://127.0.0.1/TFG', { useNewUrlParser: true } as ConnectOptions)
	.then(() => {
		// tslint:disable-next-line:no-console
		app.listen(port, () => console.log("Server corriendo en el puerto " + port));
	})
	.catch((err) => {
		// tslint:disable-next-line:no-console
		console.log(err);
	});

