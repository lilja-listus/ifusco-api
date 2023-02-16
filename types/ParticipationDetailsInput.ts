import { InputType, Field } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class ParticipationDetailsInput {
  @Field({ nullable: true })
  id?: ObjectId;

  @Field()
  accommodation: boolean;

  @Field()
  trip: string;

  @Field()
  conferenceDinner: boolean;

  @Field()
  abstract: boolean;

  @Field()
  participantId: ObjectId;
}
