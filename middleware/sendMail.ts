import { Actions } from "../types/Actions";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailContent = (participantInfo: any) => ({
  [Actions.NEW_USER]: {
    subject: "New User Confirmation",
    text: `
    Congrats, ${participantInfo.nameFirst}, you are registered an account at IFUSCO website. 
    
    The registration form for the conference will be available on the website after the registration is open.

    Please, mind that this is an automatic message, please don't reply to it. If you have any questions, please contact us through any of our official channels (https://ifusco.vercel.app/navigation/contact). 

    ================================================

    Onnittelut,  ${participantInfo.nameFirst}, olet rekisteröitynyt IFUSCOn verkkosivustolle.
    
    Itse konferenssin rekisteröitymislomakkeen voi täyttää sivustolla rekisteröinnin alettua.

    Muista, että tämä on automaattinen viesti, älä vastaa siihen. Jos sinulla on kysyttävää, ota meihin yhteyttä minkä tahansa virallisten kanavien kautta (https://ifusco.vercel.app/navigation/contact).
   
    ================================================

    Gratulálunk, ${participantInfo.nameFirst}, sikeresen regisztráltál az IFUSCO honlapjára!
   
    A regisztrációs űrlap magára a konferenciára elérhetővé válik, amint a regisztrációs időszak kezdetét veszi.

    Ez egy automatikus visszaigazoló e-mail, kérlek ne válaszolj rá! Amennyiben kérdésed van, elész minket a hivatalos csatornáink egyikén (https://ifusco.vercel.app/navigation/contact).

    ================================================

    Вітаємо, ${participantInfo.nameFirst}, вас зареєстровано на веб-сторінці IFUSCO.
   
    Сама реєстраційна форма для участі у конференції буде доступна на нашій сторінці після відкриття реєстрації.

    Наголошуємо, що це повідомлення є автоматичним, не відповідайте на нього. Якщо у вас є питання, зверніться до нас через будь-який з наших офіційних каналів (https://ifusco.vercel.app/navigation/contact). 
  
    ================================================
   
    Glückwunsch, ${participantInfo.nameFirst}, du bist nun auf der IFUSCO-Webseite angemeldet.
   
    Das Anmeldeformular für die Konferenz selbst ist hier auf der Webseite verfügbar, sobald die Registrierung geöffnet ist.

    Dies ist eine automatische Nachricht, bitte antworte nicht darauf. Bei Fragen kontaktiere uns bitte über einen unserer offiziellen Kanäle (https://ifusco.vercel.app/navigation/contact).

    ================================================

    Поздравляем, ${participantInfo.nameFirst}, вы зарегистрировали аккаунт на сайте IFUSCO.
    
    Форма регистрации на конференцию будет доступна на нашем сайте после открытия регистрации.

    Пожалуйста, обратите внимание, что это автоматическое сообщение, не отвечайте на него. Если у вас есть какие-либо вопросы, свяжитесь с нами по любому из наших официальных каналов(https://ifusco.vercel.app/navigation/contact)

`,
  },
  [Actions.NEW_PARTICIPANT]: {
    subject: "IFUSCO 2023  Registration confirmation",
    text: `
    Congtats, ${participantInfo.nameFirst},  You've been registered as a participant at IFUSCO! 

    Please, don't forget to pay the registration fee which you can do with a bank transfer to SUGRI official back account. 
    
    If you have any questions or issues, please write us to: ifusco2023@utu.fi.
    
    See you in Turku or online!

    Please check the data you've provided and contact us in case anything is wrong. 
   
    ================================================
    
    Onnittelut, ${participantInfo.nameFirst}, Sinut on rekisteröity IFUSCO:n osallistujaksi!

    Muistathan maksaa rekisteröintimaksun, jonka voit tehdä pankkisiirrolla SUGRIn viralliselle takaustilille.
    
    Jos sinulla on kysyttävää tai ongelmia, kirjoita meille osoitteeseen: ifusco2023@utu.fi.
    
    Nähdään Turussa tai netissä!

    Tarkista antamasi tiedot ja ota meihin yhteyttä, jos jokin on vialla.
   
    ================================================

    Gratulálunk, ${participantInfo.nameFirst}, sikeresen regisztráltál az IFUSCO-ra!

    Kérünk ne felejtsd el befizetni a regisztrációs díjat, melyet a SUGRI hivatalos bankszámlájára tudsz átutalni.
  
    Ha kérdésed vagy problémád akad, írj nekünk: ifusco2023@utu.fi.
  
    Találkozunk Turkuban vagy online!

    Kérünk ellenőrizd az adataid és tudasd velünk, ha valami esetleg nem stimmel.

   ================================================

   Вітаємо, ${participantInfo.nameFirst}, вас зареєстровано як учасника IFUSCO!

   Будь ласка, не забудьте сплатити реєстраційний внесок. Це можна зробити за допомогою банківського переказу на офіційний банківський рахунок SUGRI.
  
   У випадку питань чи проблем звертайтеся до нас: ifusco2023@utu.fi.
  
   Побачимося в Турку або онлайн!

   Будь ласка, перевірте вказані дані та повідомте нам, якщо щось не так.

   ================================================

   Glückwunsch, ${participantInfo.nameFirst}, du hast dich erfolgreich zur Teilnahme an der IFUSCO registriert!

   Vergiss bitte nicht, die Teilnahmegebühr via Banküberweisung ans offizielle SUGRI Bankkonto zu überweisen.
 
   Bei Fragen oder Anregungen schreibe uns bitte an: ifusco2023@utu.fi.
 
   Bis bald in Turku oder online!

   Bitte überprüfe die von dir angegebenen Daten und kontaktiere uns, falls etwas nicht stimmt.

   ================================================

    Поздравляем, ${participantInfo.nameFirst}, регистрация на Ифуско 2023 прошла успешно. 
    
    Пожалуйста, не забудьте оплатить регистрационный сбор, который вы можете сделать банковским переводом на официальный счет SUGRI.
    
    Если у вас есть какие-либо вопросы или проблемы, напишите нам по адресу: ifusco2023@utu.fi.
    
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
  agreeForPublications?: boolean,
  needTShirt?: boolean,
  tShirtSize?: string,
  tShirtColor?: string
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
    needTShirt,
    tShirtSize,
    tShirtColor,
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
