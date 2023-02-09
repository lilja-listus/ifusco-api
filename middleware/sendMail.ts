import { Actions } from "../types/Actions";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailContent = (participantInfo: any) => ({
  [Actions.NEW_USER]: {
    subject: "New User Confirmation",
    text: `Congrats, ${participantInfo.nameFirst}, you are registered to IFUSCO website. 
    The registration form for the conference itself will be available on the website after the registration is being open.

    Please, mind that this is an automatic message, please don't reply to it. If you have any questions, please contact us through any of our official channels. 


    ================================================

    Поздравляем, ${participantInfo.nameFirst}, регистрация на сайт конференции ИФУСКО прошла успешно.
    Не забудьте зарегестрироваться на саму конференцию.
`,
  },
  [Actions.NEW_PARTICIPANT]: {
    subject: "IFUSCO 2023  Registration confirmation",
    text: `Congtats, ${participantInfo.nameFirst},  You've been registered as a participant at IFUSCO! 

    Please, don't forget to pay the registration fee which you can do with a bank transfer to SUGRI official back account. 
    
    If you have any questions or issues, please write us to: ifusco@utu.fi;
    
    See you in Turku or online!

    Please check the data you've provided and contact us in case anything is wrong. 

    ================================================

    Поздравляем, ${participantInfo.nameFirst}, регистрация на Ифуско 2023 прошла успешно. До встречи в Турку или Онлайн.
    
    Пожалуйста, не забудьте оплатить регистрационный сбор, который вы можете сделать банковским переводом на официальный счет SUGRI.
    
    Если у вас есть какие-либо вопросы или проблемы, напишите нам по адресу: ifusco@utu.fi;
    
    До встречи в Турку или онлайн!

    Пожалуйста, проверьте предоставленные вами данные и свяжитесь с нами, если что-то не так.
    
    ================================================

    Info:

    Email:  ${participantInfo.email},
    First Name:  ${participantInfo.nameFirst},
    Last Name:  ${participantInfo.nameLast},
    Country:  ${participantInfo.country},
    University:  ${participantInfo.university},
    Coming to Turku: ${participantInfo.isOfflineParticipant},
    Phone Number:  ${participantInfo.phoneNumber},
    Communication Language:  ${participantInfo.communicationLanguage},
    Dietary Restrictions:  ${participantInfo.food},
    Giving Concent on Using Pictures in Social Media:  ${participantInfo.arePicturesAllowed},
    Interested in Free Accommodation:  ${participantInfo.freeAccomModationInterest},
    Holding Presentation:  ${participantInfo.isHoldingPresentation},
    Agree to Appear in Publications:  ${participantInfo.agreeForPublications},
    
    `,
  },
});

export const sendConfirmationEmail = (
  email: string,
  nameFirst: string,
  action: Actions,
  nameLast?: string,
  country?: string,
  university?: string,
  isOfflineParticipant?: boolean,
  phoneNumber?: string,
  communicationLanguage?: string,
  food?: string,
  arePicturesAllowed?: boolean,
  freeAccomModationInterest?: boolean,
  isHoldingPresentation?: boolean,
  agreeForPublications?: boolean
) => {
  const participantInfo = {
    nameFirst,
    email,
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
  };

  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: emailContent(nameFirst)[action].subject,
    text: emailContent(participantInfo)[action].text,
  };

  transporter.sendMail(
    options,
    function (err: any, info: { response: string }) {
      if (err) {
        console.log(err);
        return;
      }
      console.log("sent" + info.response);
    }
  );
};
