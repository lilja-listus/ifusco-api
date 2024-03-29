import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class User {
  @Field()
  readonly _id: ObjectId;

  @Field()
  @Property({ required: true })
  email: string;

  @Field()
  @Property({ required: true })
  password: string;

  @Field()
  @Property({ required: true })
  nameFull: string;

  @Field({ nullable: true })
  @Property()
  isParticipant?: boolean;

  @Field({ nullable: true })
  @Property()
  isAdmin?: boolean;
}

export const UserModel = getModelForClass(User);
