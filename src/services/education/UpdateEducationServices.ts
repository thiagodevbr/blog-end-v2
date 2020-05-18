import { getCustomRepository } from 'typeorm';
import Education from '../../models/Education';
import EducationRepository from '../../repositories/EducationRepository';

interface Request {
  id: string;
  description?: string;
  title?: string;
  time?: string;
}

class UpdateEducationServices {
  public async execute({
    id,
    description,
    title,
    time,
  }: Request): Promise<Education | boolean> {
    const educationRepository = getCustomRepository(EducationRepository);
    const findEducation = await educationRepository.findOne({
      where: { id },
    });
    if (findEducation) {
      findEducation.description = description || findEducation.description;
      findEducation.title = title || findEducation.title;
      findEducation.time = time || findEducation.time;
      await educationRepository.save(findEducation);
      return findEducation;
    }
    return false;
  }
}

export default UpdateEducationServices;
