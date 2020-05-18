import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Resume from './Resume';

@Entity('social_media')
class SocialMedia {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  icon_name: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resume_id' })
  @Column()
  resume_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default SocialMedia;
