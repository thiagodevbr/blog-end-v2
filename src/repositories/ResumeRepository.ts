import { EntityRepository, Repository } from 'typeorm';
import Resume from '../models/Resume';

@EntityRepository(Resume)
class ResumeRepository extends Repository<Resume> {}
export default ResumeRepository;
