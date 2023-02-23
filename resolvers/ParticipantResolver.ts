import { Resolver, Query, UseMiddleware, Arg, Mutation } from "type-graphql";
import { ObjectId } from "mongodb";
import { isAuth } from "../middleware/isAuth";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { Participant, ParticipantModel } from "../entity/Participant";
import { ParticipantInput } from "../types/ParticipantInput";
import { RegistrationInput } from "../types/RegistrationInput";
import { sendConfirmationEmail } from "../middleware/sendMail";
import { UserModel } from "../entity/User";
import { Actions } from "../types/Actions";

@Resolver(() => Participant)
export class ParticipantResolver {
  @Mutation(() => Participant)
  async registerParticipant(
    @Arg("input")
    {
      email,
      nameFirst,
      nameLast,
      country,
      university,
      isOfflineParticipant,
      phoneNumber,
      food,
      communicationLanguage,
      arePicturesAllowed,
      freeAccomModationInterest,
      isHoldingPresentation,
      agreeForPublications,
      hasPaid,
      needTShirt,
      tShirtSize,
      tShirtColor,
    }: RegistrationInput
  ): Promise<Participant> {
    const existingParticipant = await ParticipantModel.findOne({
      email,
    });

    if (existingParticipant) {
      throw new Error("The participant has already registered");
    }

    const participant = new ParticipantModel({
      email,
      nameFirst,
      nameLast,
      country,
      university,
      isOfflineParticipant,
      phoneNumber,
      communicationLanguage,
      food,
      arePicturesAllowed,
      freeAccomModationInterest,
      isHoldingPresentation,
      agreeForPublications,
      hasPaid,
      needTShirt,
      tShirtSize,
      tShirtColor,
    });

    await participant.save();

    const updatedUser = await UserModel.findOneAndUpdate(
      {
        email,
      },
      {
        isParticipant: true,
      }
    );

    if (!updatedUser) {
      console.error("The registered participant is not a user");
    }

    await sendConfirmationEmail(
      email,
      nameFirst,
      Actions.NEW_PARTICIPANT,
      nameLast,
      country,
      university,
      isOfflineParticipant,
      phoneNumber,
      communicationLanguage,
      food,
      arePicturesAllowed,
      freeAccomModationInterest,
      isHoldingPresentation,
      agreeForPublications,
      needTShirt,
      tShirtSize,
      tShirtColor
    );

    return participant;
  }

  @Mutation(() => Participant)
  @UseMiddleware(isAuth)
  async editParticipant(
    @Arg("input") participantInput: ParticipantInput
  ): Promise<Participant> {
    const { id, hasPaid } = participantInput;

    const updatedParticipant = await ParticipantModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        hasPaid,
      }
    );

    if (!updatedParticipant) {
      throw new Error("Participant not found");
    }
    updatedParticipant &&
      (await sendConfirmationEmail(
        updatedParticipant.email,
        updatedParticipant.nameFirst,
        Actions.HAS_PAID
      ));

    return updatedParticipant;
  }

  @Query(() => Participant, { nullable: true })
  async Participant(
    @Arg("participantId", () => ObjectIdScalar) participantId: ObjectId
  ) {
    return await ParticipantModel.findById(participantId);
  }

  @Query(() => Participant, { nullable: true })
  async ParticipantByEmail(
    @Arg("email") mail: string
  ): Promise<Participant | null> {
    return await ParticipantModel.findOne({ email: mail });
  }

  @Query(() => [Participant], { nullable: true })
  @UseMiddleware(isAuth)
  async AllParticipants() {
    return await ParticipantModel.find();
  }
}
