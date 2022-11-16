import jwt from 'jsonwebtoken';
import Tokens from '../config/config.json' assert { type: 'json' };

export const authMiddleware = async (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Пользователь не авторизован' });
        }
        const { secretToken } = Tokens;
        const decodedData = jwt.verify(token, secretToken);
        req.user = decodedData;
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: 'Пользователь не авторизован' });
    }
};
