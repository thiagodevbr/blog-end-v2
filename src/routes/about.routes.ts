import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';
import CreateAboutRepository from '../services/about/CreateAboutServices';

const routes = Router();

routes.get('/', async (request, response) => {
  const aboutRepository = getCustomRepository(AboutRepository);
  try {
    const aboutList = await aboutRepository.find();
    return response.json(aboutList);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.post('/', async (request, response) => {
  const { title, description } = request.body;
  const createAbout = new CreateAboutRepository();
  try {
    const about = await createAbout.execute({ title, description });
    return response.json(about);
  } catch (err) {
    return response.status(401).json(err);
  }
});

export default routes;
