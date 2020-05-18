import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tech')
class Tech {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tech_url: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Tech;
