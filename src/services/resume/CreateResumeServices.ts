import { getCustomRepository } from 'typeorm';
import ResumeRepository from '../../repositories/ResumeRepository';
import Resume from '../../models/Resume';

interface Request {
  fullname: string;
  job_title: string;
  short_description: string;
  phone: string;
  email: string;
}

class CreateResumeServices {
  public async execute({
    email,
    fullname,
    job_title,
    phone,
    short_description,
  }: Request): Promise<Resume> {
    const createResume = getCustomRepository(ResumeRepository);
    const resume = createResume.create({
      email,
      fullname,
      job_title,
      phone,
      short_description,
    });
    await createResume.save(resume);
    return resume;
  }
}

export default CreateResumeServices;
