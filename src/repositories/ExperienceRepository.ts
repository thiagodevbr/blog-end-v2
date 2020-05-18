import { EntityRepository, Repository } from 'typeorm';
import Experience from '../models/Experience';

@EntityRepository(Experience)
class ExperienceRepository extends Repository<Experience> {}

export default ExperienceRepository;
