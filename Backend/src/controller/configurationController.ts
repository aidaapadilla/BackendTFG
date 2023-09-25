import User from '../model/User';
import { Request, Response } from 'express';
import Configuration from '../model/Configuration';


const newConfiguration = async (req: Request, res: Response) => {
    try {
		const { email, language, letterSize, lastChange} = req.body; // falta last change
        const user1 = await User.findOne({ email });
		if (!user1) {
			res.status(400).json({ message: 'User not found',email, user1 });
		}
        const newConfig = new Configuration({
            user: user1._id,
            language,
            letterSize,
            lastChange
        });
        await newConfig.save().catch(Error);
        res.status(200).json({ auth: true});
    }
    catch{
        res.status(400).json({ message: 'User not found' });
    }
}
const cancel = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id;
        const configuration = await Configuration.findById(_id)
        if(!configuration) {
            res.status(400).json({ message: 'Configuration not found'});
        }
        await Configuration.findByIdAndDelete(_id).catch(Error);
        res.status(200).json({ auth:true });
    }
    catch {
        res.status(400).json({ message: 'Error', Error });
    }
}
const getall = async (req: Request, res: Response) => {
    const configurations = await Configuration.find();
    res.json(configurations);
}

const getOne = async (req: Request, res: Response) => {
	try {
		const configuration = await Configuration.findById(req.params.id);
		res.json(configuration);
	}
	catch (err) {
		res.status(400).send({ message: 'Configuration not found', err });
	}
}
const update = async (req: Request, res: Response) => {
	const _id = req.params.id;
	const { language, letterSize, lastChange } = req.body;
	try {
		const config = await Configuration.findByIdAndUpdate(_id, {
			language,
            letterSize,
            lastChange
		}, {new: true});
		return res.json(config);
	}
	catch (err) {
		res.status(400).send({ message: 'Cannot update configuration', err });
	}
}

export default {
	newConfiguration,
    cancel,
    getall,
    getOne,
    update
};