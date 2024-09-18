import * as Yup from 'yup';
import Category from '../models/Category';
import User from '../models/User'

class CategoryController {
    async store(request, response) {
        const schema = Yup.object({
            name: Yup.string().required()
        });


        const { admin: isAdmin } = await User.findByPk(request.userId);

        if (!isAdmin) {
            return response.status(401).json();
        }
        const { filename: path } = request.file;
        const { name } = request.body;

        const categoryExist = await User.finOne({
            where: {
                name,
            },
        });

        if (categoryExist) {
            return response.status(400).json({ error: 'Category already exists' })
        }

        const Category = await Category.create({
            name,
            path,
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }

        return response.status(201).json({ id, name });
    }

    async update(request, response) {
        const schema = Yup.object({
            name: Yup.string(),
        });

        try {
            schema.validateSync(request.body, { abortEarly: false });
        } catch (err) {
            return response.status(400).json({ error: err.errors });
        }


        const { admin: isAdmin } = await User.findByPk(request.userId);

        if (!isAdmin) {
            return response.status(401).json();
        }
        const { id } = request.params;

        const categoryExists = await Category.findByPk(id);

        if (!categoryExists) {
            return response
                .status(404)
                .json({ error: 'Category not found' });
        }

        let path;
        if (request.file) {
            path = request.file.filename;
        }

        const { name } = request.body;

        

        if (name) {

            const categoryNameExists = await User.findOne({
                where: {
                    name,
                },
            });

            if (categoryExist && categoryNameExists.id !== id) {
                return response.status(400).json({ error: 'Category already exists' })
            }
        }


        await Category.update({
            name,
            path,
        }, {
            where: {
                id,
            },
        },
        );



        return response.status(20).json();
    }

    async index(request, response) {
        const category = await Category.findAll();

        return response.json(categories);
    }
}

export default new CategoryController();