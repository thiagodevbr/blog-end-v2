import { getCustomRepository } from 'typeorm';
import SocialMedia from '../../models/SocialMedia';
import SocialMediaRepository from '../../repositories/SocialMediaRepository';

interface Request {
  id: string;
  icon_name?: string;
  title?: string;
  url?: string;
}

class UpdateSocialMediaServices {
  public async execute({
    id,
    icon_name,
    title,
    url,
  }: Request): Promise<SocialMedia | boolean> {
    const socialMediaRepository = getCustomRepository(SocialMediaRepository);
    const findSocialMedia = await socialMediaRepository.findOne({
      where: { id },
    });
    if (findSocialMedia) {
      findSocialMedia.icon_name = icon_name || findSocialMedia.icon_name;
      findSocialMedia.title = title || findSocialMedia.title;
      findSocialMedia.url = url || findSocialMedia.url;
      await socialMediaRepository.save(findSocialMedia);
      return findSocialMedia;
    }
    return false;
  }
}

export default UpdateSocialMediaServices;
