import UserService from '../services/user.service.js';

const UserController = {
    create: async function (req, res) {
        try {
            const user = await UserService.create(req.body);
            return res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }
};

export default UserController;
