import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import AboutRepository from '../repositories/AboutRepository';
import CreateAboutRepository from '../services/about/CreateAboutServices';
import TechRepository from '../repositories/TechRepository';
import CreateTechServices from '../services/tech/CreateTechServices';
import DeleteTechServices from '../services/tech/DeleteTechServices';
import UpdateTechServices from '../services/tech/UpdateTechServices';

const routes = Router();

routes.get('/', async (_, response) => {
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

routes.post('/techs', async (request, response) => {
  const { tech_url, description } = request.body;
  const createTech = new CreateTechServices();
  try {
    const tech = await createTech.execute({ tech_url, description });
    return response.json(tech);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.get('/techs', async (_, response) => {
  const techList = getCustomRepository(TechRepository);
  try {
    const listOfTechs = await techList.find();
    return response.json(listOfTechs);
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.delete('/techs/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTech = new DeleteTechServices();
  try {
    await deleteTech.execute({ id });
    return response.status(201).json();
  } catch (err) {
    return response.status(401).json(err);
  }
});

routes.put('/techs/:id', async (request, response) => {
  const { id } = request.params;
  const { tech_url, description } = request.body;
  try {
    const updateTech = new UpdateTechServices();
    const tech = await updateTech.execute({ id, tech_url, description });
    return response.json(tech);
  } catch (err) {
    return response.status(401).json(err);
  }
});

export default routes;
