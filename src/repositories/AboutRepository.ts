import { EntityRepository, Repository } from 'typeorm';
import About from '../models/About';

@EntityRepository(About)
class AboutRepository extends Repository<About> {
  public async findAboutBefore(): Promise<void> {
    const about = await this.find();
    if (about) {
      about.map(async item => {
        await this.delete(item.id);
      });
    }
  }
}

export default AboutRepository;
