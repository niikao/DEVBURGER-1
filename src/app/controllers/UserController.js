import { v4 } from 'uuid'
import * as Yup from 'yup'
import User from '../models/User'
import { response } from 'express';




class UserController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string()
                .trim()
                .required('O nome é obrigatório.'),
            email: Yup.string()
                .email('O email deve ser um endereço de email válido.')
                .required('O email é obrigatório.'),
            password: Yup.string()
                .min(6, 'A senha deve ter pelo menos 6 caracteres.')
                .required('A senha é obrigatória.'),
            admin: Yup.boolean()
        });

        try {
            schema.validation(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        const { name, email, password_hash, admin, } = request.body;

        const userExists = await User.findOne({
            where: {
                email,
            },
        });

        if (userExists) {
            return response.status(400).json({ error: 'User already exists' })
        };

        const user = await User.create({
            id: v4(),
            name,
            email,
            password,
            admin,
        });

        return response.status(201).json({
            id: user.id,
            name,
            email,

        });
    }
}

export default new UserController();