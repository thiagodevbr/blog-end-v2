import { EntityRepository, Repository } from 'typeorm';
import SocialMedia from '../models/SocialMedia';

@EntityRepository(SocialMedia)
class SocialMediaRepository extends Repository<SocialMedia> {}
export default SocialMediaRepository;
