import UserService from '../services/user.service.js';
import RoleService from '../services/role.service.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';
import Tokens from '../config/config.json' assert { type: 'json' };

const generateAccessToken = (id, roles) => {
    const { secretToken } = Tokens;
    const payload = {
        id,
        roles
    };
    return jwt.sign(payload, secretToken, { expiresIn: '24h' });
};

const AuthController = {
    signUp: async function (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: 'Ошибка при регистрации', errors });
            }
            const { email, password } = req.body;
            const candidate = await UserService.checkUser(email);
            if (candidate) {
                return res.status(400).json({ message: 'Email уже зарегистрирован' });
            }
            const hashPassword = bcrypt.hashSync(password, 7);
            const userRole = await RoleService.getOne('user');
            const user = await UserService.create({ ...req.body, password: hashPassword, roles: [userRole.value] });
            return res.json(user);
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'SignUp error' });
        }
    },
    login: async function (req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.checkUser(email);
            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' });
            }
            const validPassword = bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({ message: 'Введен неверный пароль' });
            }
            const token = generateAccessToken(user._id, user.roles);
            return res.json({ token });
        } catch (error) {
            console.log(error);
            res.status(400).json({ message: 'Login error' });
        }
    },
    getAll: async function (req, res) {
        try {
        } catch (error) {}
    }
};

export default AuthController;
