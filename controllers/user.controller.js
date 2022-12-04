import UserService from '../services/user.service.js';

const UserController = {
    create: async function (req, res) {
        try {
            const user = await UserService.create(req.body);
            return res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getAll: async function (req, res) {
        try {
            const users = await UserService.getAll(req.body);
            return res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default UserController;
