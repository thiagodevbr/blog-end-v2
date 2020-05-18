import { getCustomRepository } from 'typeorm';
import ExperienceRepository from '../../repositories/ExperienceRepository';

interface Request {
  id: string;
}

class DeleteExperienceServices {
  public async execute({ id }: Request): Promise<void> {
    const experienceRepository = getCustomRepository(ExperienceRepository);
    await experienceRepository.delete({ id });
  }
}

export default DeleteExperienceServices;
