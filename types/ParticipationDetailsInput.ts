import { InputType, Field } from "type-graphql";
import { ObjectId } from "mongodb";

@InputType()
export class ParticipationDetailsInput {
  @Field({ nullable: true })
  id?: ObjectId;

  @Field({ nullable: true })
  trip: string;

  @Field({ nullable: true })
  conferenceDinner: boolean;

  @Field({ nullable: true })
  abstract: boolean;

  @Field({ nullable: true })
  presentationName?: string;

  @Field({ nullable: true })
  presentationLanguage?: string;

  @Field({ nullable: true })
  presentationSlidesLanguage?: string;

  @Field()
  participantId: ObjectId;
}
