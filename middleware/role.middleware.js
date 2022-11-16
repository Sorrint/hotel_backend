import jwt from 'jsonwebtoken';
import Tokens from '../config/config.json' assert { type: 'json' };

export const roleMiddleware = (roles) => {
    return async function (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }

        try {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Пользователь не авторизован' });
            }
            const { secretToken } = Tokens;
            const { roles: userRoles } = jwt.verify(token, secretToken);
            let hasRole = false;
            userRoles.forEach((role) => {
                if (roles.includes(role)) {
                    hasRole = true;
                }
            });
            if (!hasRole) {
                return res.status(401).json({ message: 'У вас нет доступа' });
            }
            next();
        } catch (error) {
            console.log(error);
            return res.status(401).json({ message: 'Пользователь не авторизован' });
        }
    };
};
