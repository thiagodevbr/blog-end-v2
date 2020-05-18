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

@Entity('education_resume')
class Education {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  time: string;

  @Column()
  description: string;

  @ManyToOne(() => Resume)
  @JoinColumn({ name: 'resume_id' })
  @Column()
  resume_id: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Education;
