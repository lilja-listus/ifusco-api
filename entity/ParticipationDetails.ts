import { prop as Property, getModelForClass } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";
import { Ref } from "../types/Ref";
import { Participant } from "./Participant";

@ObjectType()
export class ParticipationDetails {
  @Field()
  readonly _id?: ObjectId;

  @Field()
  @Property({ required: true })
  trip: string;

  @Field()
  @Property({ required: true })
  conferenceDinner: boolean;

  @Field()
  @Property({ nullable: true })
  presentationName?: string;

  @Field()
  @Property({ nullable: true })
  presentationLanguage?: string;

  @Field()
  @Property({ nullable: true })
  presentationSlidesLanguage?: string;

  @Field({ nullable: true })
  @Property()
  abstract: boolean;

  @Field(() => Participant, { nullable: true })
  @Property({ ref: Participant, required: true })
  participant: Ref<Participant>;
}

export const ParticipationDetailsModel = getModelForClass(ParticipationDetails);
