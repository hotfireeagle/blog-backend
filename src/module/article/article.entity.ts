import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { Tag } from '../tag/tag.entity'

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  content: string

  @ManyToMany(type => Tag)
  @JoinTable()
  tags: Tag[]
}