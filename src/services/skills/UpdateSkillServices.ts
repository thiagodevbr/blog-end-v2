import { getCustomRepository } from 'typeorm';
import Skills from '../../models/Skills';
import SkillRepository from '../../repositories/SkillRepository';

interface Request {
  id: string;
  icon_name?: string;
  title?: string;
  time?: string;
}

class UpdateSkillServices {
  public async execute({
    id,
    icon_name,
    title,
    time,
  }: Request): Promise<Skills | boolean> {
    const skillRepository = getCustomRepository(SkillRepository);
    const findSkill = await skillRepository.findOne({ where: { id } });
    if (findSkill) {
      findSkill.icon_name = icon_name || findSkill.icon_name;
      findSkill.title = title || findSkill.title;
      findSkill.time = time || findSkill.time;
      await skillRepository.save(findSkill);
      return findSkill;
    }
    return false;
  }
}

export default UpdateSkillServices;
