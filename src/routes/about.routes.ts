import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';

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

export default routes;
