import authMiddleware  from '../src/app/middlewares/auth';
import { Router } from 'express'

import multer from 'multer';
import multerConfig from './config/multer.js';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrdersController';



const routes = new Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);  /*  o erro pode estar nessa linha */

routes.use(authMiddleware);
routes.post('/products',upload.single('file'), ProductController.store);
routes.get('/products',  ProductController.index);
routes.put('/products/:id',upload.single('file'), ProductController.update);

routes.post('/categories', upload.single('file'),CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);
export default routes;