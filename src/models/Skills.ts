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

@Entity('skills_resume')
class Skills {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  icon_name: string;

  @Column()
  title: string;

  @Column()
  time: string;

  @Column()
  resume_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resume_id' })
  resume: Resume;
}

export default Skills;
