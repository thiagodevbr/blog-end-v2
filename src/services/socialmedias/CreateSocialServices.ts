import { getCustomRepository, getRepository } from 'typeorm';
import SocialMedia from '../../models/SocialMedia';
import SocialMediaRepository from '../../repositories/SocialMediaRepository';
import Resume from '../../models/Resume';

interface Request {
  icon_name: string;
  title: string;
  url: string;
  resume_id?: string;
}

class CreateSocialMediaServices {
  public async execute({
    url,
    title,
    icon_name,
  }: Request): Promise<SocialMedia> {
    const createSocialMedia = getCustomRepository(SocialMediaRepository);
    const getResumeData = getRepository(Resume);
    const resume = await getResumeData.findOne();
    const socialMedia = createSocialMedia.create({
      icon_name,
      title,
      url,
      resume_id: resume?.id,
    });
    await createSocialMedia.save(socialMedia);
    return socialMedia;
  }
}

export default CreateSocialMediaServices;
