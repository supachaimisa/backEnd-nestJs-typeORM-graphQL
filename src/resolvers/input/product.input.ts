import { Field, InputType } from '@nestjs/graphql';
// import UserInput from './user.input';

@InputType()
export default class ProductInput {
  @Field()
  readonly product_title: string;

  @Field()
  readonly product_date: string;

  @Field()
  readonly product_detail: string;

  @Field()
  readonly product_price: number;

  @Field()
  readonly product_rating: number;
  
  @Field()
  readonly product_sale_finish: number;
}

// @InputType()
// export class DeleteProductInput {
//   @Field()
//   readonly id: number;

//   @Field()
//   readonly userId: number;
// }
