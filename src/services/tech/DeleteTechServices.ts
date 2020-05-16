import { getCustomRepository } from 'typeorm';
import TechRepository from '../../repositories/TechRepository';

interface Request {
  id: string;
}

class DeleteTechServices {
  public async execute({ id }: Request): Promise<void> {
    const techRepository = getCustomRepository(TechRepository);
    await techRepository.delete(id);
  }
}

export default DeleteTechServices;
