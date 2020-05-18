import { getCustomRepository } from 'typeorm';
import Experience from '../../models/Experience';
import ExperienceRepository from '../../repositories/ExperienceRepository';

interface Request {
  id: string;
  description?: string;
  title?: string;
  time?: string;
}

class UpdateExperienceServices {
  public async execute({
    id,
    description,
    title,
    time,
  }: Request): Promise<Experience | boolean> {
    const experienceRepository = getCustomRepository(ExperienceRepository);
    const findExperience = await experienceRepository.findOne({
      where: { id },
    });
    if (findExperience) {
      findExperience.description = description || findExperience.description;
      findExperience.title = title || findExperience.title;
      findExperience.time = time || findExperience.time;
      await experienceRepository.save(findExperience);
      return findExperience;
    }
    return false;
  }
}

export default UpdateExperienceServices;
