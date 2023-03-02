import { Actions } from "../types/Actions";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailContent = (participantInfo: any) => ({
  [Actions.NEW_USER]: {
    subject: "New User Confirmation (automatic message)",
    text: `
    Congrats, ${participantInfo.nameFirst}, you are registered an account at IFUSCO website. 
    
    The registration form for the conference is available on the website.

    Please, mind that this is an automatic message, please don't reply to it. If you have any questions, please contact us through any of our official channels (https://ifusco2023.info/navigation/contact). 

    ================================================

    Onnittelut,  ${participantInfo.nameFirst}, olet rekisteröitynyt IFUSCOn verkkosivustolle.
   
    Voit täyttää konferenssin ilmoittautumislomakkeen sivustolla.
 
    Tämä on automaattinen viesti. Älä vastaa tähän viestiin. Jos sinulla on kysyttävää, ota meihin yhteyttä virallisten kanavien kautta (https://ifusco2023.info/navigation/contact).
  
    ================================================
 
    Gratulálunk, ${participantInfo.nameFirst}, sikeresen regisztráltál az IFUSCO honlapjára!
   
    A regisztrációs űrlap magára a konferenciára elérhetővé válik.

    Ez egy automatikus visszaigazoló e-mail, kérlek ne válaszolj rá! Amennyiben kérdésed van, elész minket a hivatalos csatornáink egyikén (https://ifusco2023.info/navigation/contact).

    ================================================

    Palju õnne, ${participantInfo.nameFirst}, olete IFUSCO veebisaidil registreeritud.
  
    Registreerimisvorm konverentsile ise on saadaval veebisaidil.
 
    Pange tähele, et tegemist on automaatse sõnumiga, palun ärge sellele vastake. Kui teil on küsimusi, võtke meiega ühendust meie ametlike kanalite kaudu.
 
    ================================================

    Вітаємо, ${participantInfo.nameFirst}, вас зареєстровано на веб-сторінці IFUSCO.
   
    Сама реєстраційна форма для участі у конференції доступна на нашій сторінці реєстрації.

    Наголошуємо, що це повідомлення є автоматичним, не відповідайте на нього. Якщо у вас є питання, зверніться до нас через будь-який з наших офіційних каналів (https://ifusco2023.info/navigation/contact). 
  
    ================================================
    
    Glückwunsch, ${participantInfo.nameFirst}, du bist nun auf der IFUSCO-Webseite angemeldet.
 
    Das Anmeldeformular für die Konferenz selbst ist hier auf der Webseite verfügbar.

    Dies ist eine automatische Nachricht, bitte antworte nicht darauf. Bei Fragen kontaktiere uns bitte über einen unserer offiziellen Kanäle (https://ifusco2023.info/navigation/contact).

    ================================================

    Поздравляем, ${participantInfo.nameFirst}, вы зарегистрировали аккаунт на сайте IFUSCO.
    
    Форма регистрации на конференцию доступна на нашем сайте.

    Пожалуйста, обратите внимание, что это автоматическое сообщение, не отвечайте на него. Если у вас есть какие-либо вопросы, свяжитесь с нами по любому из наших официальных каналов(https://ifusco2023.info/navigation/contact)

`,
  },
  [Actions.NEW_PARTICIPANT]: {
    subject: "IFUSCO 2023  Registration Confirmation (automatic message)",
    text: `
    Congtats, ${
      participantInfo.nameFirst
    },  You've been registered as a participant at IFUSCO! 

    Please, don't forget to pay the registration fee which you can do with a bank transfer to SUGRI official back account. 
    
    Recipient of the payment: Sugri ry
    Account Number: FI72 4713 0010 0712 15
    Reference Number: 13165
    Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

    The last date for payment is 31.3.2023.

    If you have any questions or issues, please write us to: ifusco2023@utu.fi.
    
    See you in Turku or online!

    Please check the data you've provided and contact us in case anything is wrong. 
   
    ================================================
  
    Onnittelut, ${
      participantInfo.nameFirst
    }, olet ilmoittautunut IFUSCO:n osallistujaksi!
 
    Muistathan maksaa osallistumismaksun. Osallistumismaksun voi maksaa pankkisiirrolla Sugri ry:n tilille.

    Maksun vastaanottaja: Sugri ry
    Tili: FI72 4713 0010 0712 15
    Viite: 13165
    Summa: ${participantInfo.needTShirt ? "€47" : "€30"}

    Viimeinen maksupäivä on 31.3.2023.
   
    Jos sinulla on kysyttävää tai ongelmia, kirjoita meille osoitteeseen ifusco2023@utu.fi.
   
    Nähdään Turussa tai verkossa!
 
    Tarkista antamasi tiedot ja ota meihin yhteyttä, jos jokin on vialla.
  
    ================================================

    Gratulálunk, ${
      participantInfo.nameFirst
    }, sikeresen regisztráltál az IFUSCO-ra!

    Kérünk ne felejtsd el befizetni a regisztrációs díjat, melyet a SUGRI hivatalos bankszámlájára tudsz átutalni.
  
    Recipient of the payment: Sugri ry
    Account Number: FI72 4713 0010 0712 15
    Reference Number: 13165
    Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

    A kifizetés utolsó határideje: 2023.3.31.

    Ha kérdésed vagy problémád akad, írj nekünk: ifusco2023@utu.fi.
  
    Találkozunk Turkuban vagy online!

    Kérünk ellenőrizd az adataid és tudasd velünk, ha valami esetleg nem stimmel.

   ================================================

   Palju õnne,${
     participantInfo.nameFirst
   }, olete registreeritud IFUSCO osalejaks!

   Palun ärge unustage tasuda registreerimistasu, mida saate teha pangaülekandega SUGRI ametlikule pangakontole.
   
   Recipient of the payment: Sugri ry
   Account Number: FI72 4713 0010 0712 15
   Reference Number: 13165
   Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

   Viimane maksetähtaeg on 31.3.2023.

   Kui teil on küsimusi või probleeme, võtke meiega ühendust aadressil: ifusco2023@utu.fi;

   Kohtumiseni Turus või internetis!

   Palun kontrollige esitatud teavet ja võtke meiega ühendust, kui midagi on valesti.

    ================================================

    Вітаємо, ${participantInfo.nameFirst}, вас зареєстровано як учасника IFUSCO!

    Будь ласка, не забудьте сплатити реєстраційний внесок. Це можна зробити за допомогою банківського переказу на офіційний банківський рахунок SUGRI.
  
    Recipient of the payment: Sugri ry
    Account Number: FI72 4713 0010 0712 15
    Reference Number: 13165
    Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

    Останній день для оплати - 31.3.2023.

    У випадку питань чи проблем звертайтеся до нас: ifusco2023@utu.fi.
  
    Побачимося в Турку або онлайн!

    Будь ласка, перевірте вказані дані та повідомте нам, якщо щось не так.

    ================================================

    Glückwunsch, ${
      participantInfo.nameFirst
    }, du hast dich erfolgreich zur Teilnahme an der IFUSCO registriert!

    Vergiss bitte nicht, die Teilnahmegebühr via Banküberweisung ans offizielle SUGRI Bankkonto zu überweisen.
 
    Recipient of the payment: Sugri ry
    Account Number: FI72 4713 0010 0712 15
    Reference Number: 13165
    Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

    Letzter Zahlungstermin ist der 31.3.2023.

    Bei Fragen oder Anregungen schreibe uns bitte an: ifusco2023@utu.fi.
    
    Bis bald in Turku oder online!
 
    Bitte überprüfe die von dir angegebenen Daten und kontaktiere uns, falls etwas nicht stimmt.
 
    ================================================

    Поздравляем, ${
      participantInfo.nameFirst
    }, регистрация на Ифуско 2023 прошла успешно. 
    
    Пожалуйста, не забудьте оплатить регистрационный сбор, который вы можете сделать банковским переводом на официальный счет SUGRI.
    
    Recipient of the payment: Sugri ry
    Account Number: FI72 4713 0010 0712 15
    Reference Number: 13165
    Amount: ${participantInfo.needTShirt ? "€47" : "€30"}

    Последний день для оплаты - 31.3.2023.

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
    Giving Concent on Using Pictures in Social Media:  ${
      participantInfo.arePicturesAllowed
    },
    Interested in Free Accommodation:  ${
      participantInfo.freeAccomModationInterest
    },
    Holding Presentation:  ${participantInfo.isHoldingPresentation},
    Agree to Appear in Publications:  ${participantInfo.agreeForPublications},
    
    `,
  },
  [Actions.HAS_PAID]: {
    subject: "IFUSCO 2023 Payment confirmation (automatic message)",
    text: `
   ${participantInfo.nameFirst}, your participation fee payment was received. 
   
   ================================================

   ${participantInfo.nameFirst}, osallistumismaksusi on vastaanotettu.
  
   ================================================
 

   ${participantInfo.nameFirst}, a részvételi díj befizetése beérkezett.
   
   ================================================
   
   ${participantInfo.nameFirst}, teie osavõtutasu makse on laekunud.
   
   ================================================

   ${participantInfo.nameFirst}, ваш платіж за участь у конференції отримано. 
   
   ================================================

   ${participantInfo.nameFirst}, die Zahlung Ihrer Teilnahmegebühr eingegangen ist.
   
   ================================================

   ${participantInfo.nameFirst}, оплата за участие была получена. 
   

  Ifusco 2023 
   
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
