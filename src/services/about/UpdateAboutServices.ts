import { getCustomRepository } from 'typeorm';
import About from '../../models/About';
import AboutRepository from '../../repositories/AboutRepository';

interface Request {
  id: string;
  title?: string;
  description?: string;
}

class UpdateAboutServices {
  public async execute({
    id,
    title,
    description,
  }: Request): Promise<About | boolean> {
    const aboutRepository = getCustomRepository(AboutRepository);
    const findAbout = await aboutRepository.findOne({ where: { id } });
    if (findAbout) {
      findAbout.title = title || findAbout.title;
      findAbout.description = description || findAbout.description;
      await aboutRepository.save(findAbout);
      return findAbout;
    }
    return false;
  }
}

export default UpdateAboutServices;
