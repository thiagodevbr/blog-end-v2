import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';

const routes = Router();

routes.get('/', async (request, response) => {
  const aboutRepository = getCustomRepository(AboutRepository);
  const aboutList = await aboutRepository.find();
  return response.json(aboutList);
});

export default routes;
