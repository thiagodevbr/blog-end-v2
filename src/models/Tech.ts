import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tech')
class Tech {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tech_url: string;

  @Column()
  description: string;
}

export default Tech;
