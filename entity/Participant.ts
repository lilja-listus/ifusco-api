import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Participant {
  @Field()
  readonly _id: ObjectId;

  @Field({ nullable: true })
  @Property()
  email: string;

  @Field()
  @Property()
  nameFirst: string;

  @Field({ nullable: true })
  @Property()
  nameLast: string;

  @Field({ nullable: true })
  @Property()
  country: string;

  @Field({ nullable: true })
  @Property()
  university: string;

  @Field({ nullable: true })
  @Property()
  hasPaid: boolean;

  @Field({ nullable: true })
  @Property()
  isOfflineParticipant: boolean;

  @Field({ nullable: true })
  @Property()
  phoneNumber: string;

  @Field({ nullable: true })
  @Property()
  communicationLanguage: string;

  @Field({ nullable: true })
  @Property()
  food: string;

  @Field({ nullable: true })
  @Property()
  arePicturesAllowed: boolean;

  @Field({ nullable: true })
  @Property()
  freeAccomModationInterest: boolean;

  @Field({ nullable: true })
  @Property()
  isHoldingPresentation: boolean;

  @Field({ nullable: true })
  @Property()
  agreeForPublications: boolean;

  @Field({ nullable: true })
  @Property()
  needTShirt: boolean;

  @Field({ nullable: true })
  @Property()
  tShirtSize: string;

  @Field({ nullable: true })
  @Property()
  tShirtColor: string;
}

export const ParticipantModel = getModelForClass(Participant);
