import { getCustomRepository } from 'typeorm';
import About from '../../models/About';
import AboutRepository from '../../repositories/AboutRepository';

interface Request {
  title: string;
  description: string;
}

class CreateAboutService {
  public async execute({ title, description }: Request): Promise<About> {
    const aboutRepository = getCustomRepository(AboutRepository);
    await aboutRepository.findAboutBefore();
    const about = aboutRepository.create({
      title,
      description,
    });
    await aboutRepository.save(about);
    return about;
  }
}

export default CreateAboutService;
