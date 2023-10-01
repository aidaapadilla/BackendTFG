import Game from '../model/Game';
import User from '../model/Teacher';
import { Request, Response } from 'express';


const register = async (req: Request, res: Response) => {
	try {
		const { email, runways, windRose, airportCapacity} = req.body;
		const user1 = await User.findOne({ email });
		if (!user1) {
			res.status(400).json({ message: 'User not found',email, user1 });
		}
		const newGame = new Game({
			user: user1._id,
			runways,
			windRose,
			airportCapacity
		});
		await newGame.save().catch(Error);
		await User.updateOne( 
			{ _id: user1 },
			{ $addToSet: { myGames: newGame._id } }
		);
		res.status(200).json({ auth: true });
	}
	catch {
		res.status(400).json({ message: 'User not found' });
	}
};

const cancel = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
		const game = await Game.findById(_id)
		if (!game) {
			res.status(400).json({ message: 'Game not found' });
		}
		await Game.findByIdAndDelete(_id).catch(Error);
		await User.updateOne( // Desasociar Game a un usuari
			{ _id: game.user },
			{ $pull: { myGames: game._id } }
		);
		res.status(200).json({ auth: true });
	}
	catch (err) {
		res.status(400).json({ message: 'Error', err });
	}
};

const getall = async (req: Request, res: Response) => {
	const games = await Parking.find(); // .populate('user');
	res.json(game);
};

const getOne = async (req: Request, res: Response) => {
	try {
		const parking = await Parking.findById(req.params.id);
		res.json(parking);
	}
	catch (err) {
		res.status(400).send({ message: 'Parking not found', err });
	}
}

const update = async (req: Request, res: Response) => {
	const _id = req.params.id;
	const { type, price, size, difficulty } = req.body;
	try {
		const parking = await Parking.findByIdAndUpdate(_id, {
			type,
			price,
			size,
			difficulty
		}, {new: true});
		return res.json(parking);
	}
	catch (err) {
		res.status(400).send({ message: 'Cannot update parking', err });
	}
}

const updateAddress = async (req: Request, res: Response) => {
	try {
		const _id = req.params.id;
		const { country, city, street, streetNumber, spotNumber } = req.body;
		const parking = await Parking.findByIdAndUpdate(_id, {
			country,
			city,
			street,
			streetNumber,
			spotNumber
		}, { new: true });
		res.json(parking);
	}
	catch (err) {
		res.status(400).send({ message: 'Cannot update parking address', err });
	}
}

export default {
	register,
	cancel,
	getall,
	getOne,
	update,
	updateAddress
};