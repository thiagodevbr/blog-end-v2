import { getCustomRepository } from 'typeorm';
import SocialMediaRepository from '../../repositories/SocialMediaRepository';

interface Request {
  id: string;
}

class DeleteSocialMediaServices {
  public async execute({ id }: Request): Promise<void> {
    const socialMedia = getCustomRepository(SocialMediaRepository);
    await socialMedia.delete(id);
  }
}

export default DeleteSocialMediaServices;
