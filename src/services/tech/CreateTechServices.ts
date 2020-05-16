import { getCustomRepository } from 'typeorm';
import Tech from '../../models/Tech';
import TechRepository from '../../repositories/TechRepository';

interface Request {
  tech_url: string;
  description: string;
}

class CreateTechServices {
  public async execute({ tech_url, description }: Request): Promise<Tech> {
    const techRepository = getCustomRepository(TechRepository);
    const tech = techRepository.create({
      tech_url,
      description,
    });
    await techRepository.save(tech);
    return tech;
  }
}

export default CreateTechServices;
