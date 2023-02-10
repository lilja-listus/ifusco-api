import { InputType, Field } from "type-graphql";
import { Participant } from "../entity/Participant";

@InputType()
export class ParticipantInput implements Partial<Participant> {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  nameFirst?: string;

  @Field({ nullable: true })
  nameLast?: string;

  @Field({ nullable: true })
  country?: string;

  @Field({ nullable: true })
  university?: string;

  @Field({ nullable: true })
  isOfflineParticipant?: boolean;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  communicationLanguage?: string;

  @Field({ nullable: true })
  food?: string;

  @Field({ nullable: true })
  arePicturesAllowed?: boolean;

  @Field({ nullable: true })
  freeAccomModationInterest?: boolean;

  @Field({ nullable: true })
  isHoldingPresentation?: boolean;

  @Field({ nullable: true })
  agreeForPublications?: boolean;

  @Field({ nullable: true })
  hasPaid?: boolean;
}
