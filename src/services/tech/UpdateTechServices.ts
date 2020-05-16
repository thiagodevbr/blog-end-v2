import { getCustomRepository } from 'typeorm';
import Tech from '../../models/Tech';
import TechRepository from '../../repositories/TechRepository';

interface Request {
  id: string;
  tech_url: string;
  description: string;
}

class UpdateTechServices {
  public async execute({
    id,
    tech_url,
    description,
  }: Request): Promise<Tech | boolean> {
    const updateTech = getCustomRepository(TechRepository);
    const tech = await updateTech.findOne({ where: { id } });

    if (tech) {
      tech.tech_url = tech_url || tech.tech_url;
      tech.description = description || tech.description;
      await updateTech.save(tech);
      return tech;
    }

    return false;
  }
}

export default UpdateTechServices;
