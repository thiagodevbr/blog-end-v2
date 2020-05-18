import { EntityRepository, Repository } from 'typeorm';
import Education from '../models/Education';

@EntityRepository(Education)
class EducationRepository extends Repository<Education> {}

export default EducationRepository;
