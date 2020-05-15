import { Router } from 'express';
import About from './about.routes';

const routes = Router();

routes.use('/about', About);

export default routes;
