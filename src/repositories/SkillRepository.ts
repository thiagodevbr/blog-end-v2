import { EntityRepository, Repository } from 'typeorm';
import Skills from '../models/Skills';

@EntityRepository(Skills)
class SkillRepository extends Repository<Skills> {}
export default SkillRepository;
