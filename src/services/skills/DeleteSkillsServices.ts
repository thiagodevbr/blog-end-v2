import { getCustomRepository } from 'typeorm';
import SkillRepository from '../../repositories/SkillRepository';

interface Request {
  id: string;
}

class DeleteSkillsServices {
  public async execute({ id }: Request): Promise<void> {
    const skillRepository = getCustomRepository(SkillRepository);
    await skillRepository.delete(id);
  }
}

export default DeleteSkillsServices;
