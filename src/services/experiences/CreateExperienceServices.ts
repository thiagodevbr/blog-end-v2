import { getCustomRepository, getRepository } from 'typeorm';
import ExperienceRepository from '../../repositories/ExperienceRepository';
import Experience from '../../models/Experience';
import Resume from '../../models/Resume';

interface Request {
  title: string;
  time: string;
  description: string;
}

class CreateExperienceServices {
  public async execute({
    description,
    time,
    title,
  }: Request): Promise<Experience> {
    const experienceRepository = getCustomRepository(ExperienceRepository);
    const resumeData = getRepository(Resume);
    const resume = await resumeData.findOne();
    const experience = experienceRepository.create({
      description,
      time,
      title,
      resume_id: resume?.id,
    });
    await experienceRepository.save(experience);
    return experience;
  }
}

export default CreateExperienceServices;
