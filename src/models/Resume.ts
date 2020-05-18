import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

import Skills from './Skills';

@Entity('resume')
class Resume {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullname: string;

  @Column()
  job_title: string;

  @Column()
  short_description: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Skills, skills => skills.resume)
  @JoinColumn({ name: 'skills_id' })
  skills: Skills;

  // @OneToMany(() => Skills, skills => skills.resume)
  // @JoinColumn({ name: 'skills_id' })
  // skills: Skills;
}

export default Resume;
