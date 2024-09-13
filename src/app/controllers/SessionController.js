import jwt from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';


class SessionController {
    async store(resquest, response) {
        const schema = Yup.object({
            email: Yup.string().email().required(),
            password: Yup.string().min(6).required(),
        });

        const isValid = await schema.isValid(resquest.body);

        const emailOrPasswordincorrect = () => {
            return response
            .status(401)
            .json({ error: 'Validation fails' });
        }

        if (!isValid) {
           return emailOrPasswordincorrect();
        }

        const { email, password } = request.body;

        const user = await User.findOne({
            where: {
                email,
            },
        });

        if (!user) {
            return emailOrPasswordincorrect();
        }

        const isSamePassword = await user.checkPassword(password);

        if (!isSamePassword) {
            return emailOrPasswordincorrect();
        }

        return response.status(201).json({
            id: user.id,
            name: user.name,
            email,
            admin: user.admin,
            token: jwt.sign({id: user.id, name: user.name}, authConfig.secret ,  {
                expiresIn: authConfig.expiresIn, 
            })
        });
    }
}

export default new SessionController();