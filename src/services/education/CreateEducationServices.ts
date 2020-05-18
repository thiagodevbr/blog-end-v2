import { getCustomRepository, getRepository } from 'typeorm';
import EducationRepository from '../../repositories/EducationRepository';
import Education from '../../models/Education';
import Resume from '../../models/Resume';

interface Request {
  title: string;
  time: string;
  description: string;
}

class CreateEducationServices {
  public async execute({
    description,
    time,
    title,
  }: Request): Promise<Education> {
    const educationRepository = getCustomRepository(EducationRepository);
    const resumeData = getRepository(Resume);
    const resume = await resumeData.findOne();
    const education = educationRepository.create({
      description,
      time,
      title,
      resume_id: resume?.id,
    });
    await educationRepository.save(education);
    return education;
  }
}

export default CreateEducationServices;
