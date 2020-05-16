import { EntityRepository, Repository } from 'typeorm';
import Tech from '../models/Tech';

@EntityRepository(Tech)
class TechRepository extends Repository<Tech> {}

export default TechRepository;
