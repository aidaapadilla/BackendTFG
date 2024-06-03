import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import cors from "cors";
import Student from "./api/Student";
import Game from "./api/Game";
import Teacher from "./api/Teacher";

const app = express();
const port = process.env.PORT || 3000;  // Cambié el puerto de la aplicación a 3000, ya que 27017 es el puerto de MongoDB

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/students', Student);
app.use('/api/games', Game);
app.use('/api/teachers', Teacher);

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World!');
});

const mongoUrl = 'mongodb://localhost:27017/TFG';  // URL de conexión actualizada

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions)
	.then(() => {
		app.listen(port, () => console.log(`Server corriendo en el puerto ${port}`));
	})
	.catch((err) => {
		console.log(err);
	});
