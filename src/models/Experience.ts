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

@Entity('experience_resume')
class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  time: string;

  @Column()
  description: string;

  @Column()
  resume_id: string;

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resume_id' })
  resume: Resume;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Experience;
