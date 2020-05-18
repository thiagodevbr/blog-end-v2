import { getCustomRepository, getRepository } from 'typeorm';
import Skills from '../../models/Skills';
import SkillRepository from '../../repositories/SkillRepository';

import Resume from '../../models/Resume';

interface Request {
  icon_name: string;
  title: string;
  time: string;
  resume_id?: string;
}

class CreateSkillsServices {
  public async execute({ icon_name, title, time }: Request): Promise<Skills> {
    const createSkill = getCustomRepository(SkillRepository);
    const getResumeData = getRepository(Resume);
    const resume = await getResumeData.findOne();
    const skill = createSkill.create({
      icon_name,
      title,
      time,
      resume_id: resume?.id,
    });
    await createSkill.save(skill);
    return skill;
  }
}

export default CreateSkillsServices;
