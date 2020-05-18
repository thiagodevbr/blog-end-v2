import { getCustomRepository } from 'typeorm';
import EducationRepository from '../../repositories/EducationRepository';

interface Request {
  id: string;
}

class DeleteEducationServices {
  public async execute({ id }: Request): Promise<void> {
    const educationRepository = getCustomRepository(EducationRepository);
    await educationRepository.delete({ id });
  }
}

export default DeleteEducationServices;
