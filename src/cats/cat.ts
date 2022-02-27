import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

// Object(Modelの宣言部)
@ObjectType()
export class Cat {
  @Field((type) => ID)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  age: number;

  @Field()
  createdAt: Date;
}
