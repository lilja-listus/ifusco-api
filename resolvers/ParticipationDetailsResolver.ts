import { Resolver, Query, UseMiddleware, Arg, Mutation } from "type-graphql";
import { ObjectId } from "mongodb";
import { isAuth } from "../middleware/isAuth";
import {
  ParticipationDetails,
  ParticipationDetailsModel,
} from "../entity/ParticipationDetails";
import { ObjectIdScalar } from "../schema/object-id.scalar";
import { ParticipationDetailsInput } from "../types/ParticipationDetailsInput";
import { ParticipantModel } from "../entity/Participant";

@Resolver(() => ParticipationDetails)
export class ParticipationDetailsResolver {
  @Query(() => ParticipationDetails, { nullable: true })
  async participationDetailsById(
    @Arg("participationDetailsId", () => ObjectIdScalar)
    participationDetailsId: ObjectId
  ) {
    return await ParticipationDetailsModel.findById(participationDetailsId);
  }

  @Query(() => [ParticipationDetails])
  @UseMiddleware(isAuth)
  async getAllParticipationDetails() {
    const allDetails = await ParticipationDetailsModel.find()
      .populate("participant")
      .exec();
    return allDetails;
  }

  @Query(() => ParticipationDetails)
  @UseMiddleware(isAuth)
  async participationDetailsByParticipant(
    @Arg("participantId", () => ObjectIdScalar) participantId: ObjectId
  ) {
    return await ParticipationDetailsModel.findOne({
      participant: participantId,
    });
  }

  @Mutation(() => ParticipationDetails)
  @UseMiddleware(isAuth)
  async addParticipationDetails(
    @Arg("input") participationDetailsInput: ParticipationDetailsInput
  ): Promise<ParticipationDetails> {
    const participant = await ParticipantModel.findById(
      participationDetailsInput.participantId
    );

    if (!participant) {
      throw new Error("Participant not found");
    }

    const theDetailsExist = await ParticipationDetailsModel.findOne({
      participant: participationDetailsInput.participantId,
    });

    if (theDetailsExist?._id) {
      throw new Error("The details have been already provided");
    }

    const participationDetails = new ParticipationDetailsModel({
      ...participationDetailsInput,
      participant,
    } as ParticipationDetails);

    await participationDetails.save();
    return participationDetails;
  }
}
