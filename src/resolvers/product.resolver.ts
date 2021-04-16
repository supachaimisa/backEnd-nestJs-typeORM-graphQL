import {
  Args,
  Mutation,
  Query,
  Resolver,
  Parent,
  ResolveField,
  Subscription,
  Context,
} from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import RepoService from '../repo.service';
// import Message from '../db/models/message.entity';
import Product from '../db/models/product.entity';
import ProductInput from './input/product.input';
// import MessageInput, { DeleteMessageInput } from './input/message.input';
// import User from '../db/models/user.entity';
// import { context } from 'src/db/loaders';

export const pubSub = new PubSub();

@Resolver(() => Product)
export default class ProductResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [Product])
  public async getProducts(): Promise<Product[]> {
    return this.repoService.productRepo.find();
  }

  // @Query(() => [Product])
  // public async getProductsFromUser(
  //   @Args('userId') userId: number,
  // ): Promise<Product[]> {
  //   return this.repoService.productRepo.find({
  //     where: { userId },
  //   });
  // }

  @Query(() => Product, { nullable: true })
  public async getProduct(@Args('id') id: number): Promise<Product> {
    return this.repoService.productRepo.findOne(id);
  }

  @Mutation(() => Product)
  public async createProduct(
    @Args('data') input: ProductInput,
  ): Promise<Product> {
    const Product = this.repoService.productRepo.create({
      product_title: input.product_title,
      product_date: input.product_date,
      product_price: input.product_price,
      product_rating: input.product_rating,
      product_sale_finish: input.product_sale_finish,
      product_detail: input.product_detail,
    });

    const response = await this.repoService.productRepo.save(Product);

    pubSub.publish('ProductAdded', { ProductAdded: Product });

    return response;
  }
  @Mutation(() => Product)
  public async updateProduct(
    @Args('id') id: number ,
    @Args('data') input: ProductInput 
  ): Promise<Product> {
    const product = new Product;
    product.product_title = input.product_title,
    product.product_date = input.product_date,
    product.product_price = input.product_price,
    product.product_rating = input.product_rating,
    product.product_sale_finish = input.product_sale_finish,
    product.product_detail = input.product_detail
    this.repoService.productRepo.update(id, product);
    const response = await this.repoService.productRepo.findOne(id);
    return response ;
  }
  @Mutation(() => Product)
  public async deleteProduct(
    @Args('id') id: number,
  ): Promise<Product> {
    const product = await this.repoService.productRepo.findOne(id);
    if (!product || product.id !== id)
      throw new Error(
        'Message does not exists or you are not the car',
      );
    const copy = { ...product };
    await this.repoService.productRepo.remove(product);

    return copy;
  }
  
  // @Subscription(() => Product)
  // ProductAdded() {
  //   return pubSub.asyncIterator('ProductAdded');
  // }

  // @ResolveField(() => User, { name: 'user' })
  // public async getUser(
  //   @Parent() parent: Product,
  //   @Context() { UserLoader }: typeof context,
  // ): Promise<User> {
  //   return UserLoader.load(parent.userId); // With DataLoader
  //   // return this.repoService.userRepo.findOne(parent.userId); // Without DataLoader
  // }
}
