import { EntityRepository, Repository } from 'typeorm';
import About from '../models/About';

@EntityRepository(About)
class AboutRepository extends Repository<About> {}

export default AboutRepository;
