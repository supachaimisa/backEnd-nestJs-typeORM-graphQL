import { Field, ObjectType } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
// import User from './user.entity';

@ObjectType()
@Entity({ name: 'tb_product' })
export default class Product {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  product_title: string;

  @Field()
  @Column()
  product_date: string;

  @Field()
  @Column()
  product_rating: number;

  @Field()
  @Column()
  product_price: number;

  @Field()
  @Column()
  product_sale_finish: number;

  @Field()
  @Column()
  product_detail: string;

  // @Field(() => User)
  // user: User;

  // // Associations
  // @ManyToOne(
  //   () => User,
  //   user => user.messageConnection,
  //   { primary: true },
  // )
  // @JoinColumn({ name: 'user_id' })
  // userConnection: Promise<User>;
}
