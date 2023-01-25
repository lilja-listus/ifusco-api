import { Actions } from "../types/Actions";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

const emailContent = (nameFirst: string) => ({
  [Actions.NEW_USER]: {
    subject: "New user confirmation",
    text: `Congrats, ${nameFirst}, you are registered to IFUSCO website. 
    The registration form for the conference itself will be available on the website after the registration is being open.

    ================================================

    Поздравляем, ${nameFirst}, регистрация на сайт конференции ИФУСКО прошла успешно.
    Не забудьте зарегестрироваться на саму конференцию.
`,
  },
  [Actions.NEW_PARTICIPANT]: {
    subject: "IFUSCO 2023  Registration confirmation",
    text: `Congtats, ${nameFirst},  You've been registered as a participant at IFUSCO! See you in Turku or online!

    ================================================

    Поздравляем, ${nameFirst}, регистрация на Ифуско 2023 прошла успешно. До встречи в Турку или Онлайн`,
  },
});

export const sendConfirmationEmail = (
  email: string,
  nameFirst: string,
  action: Actions
) => {
  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: emailContent(nameFirst)[action].subject,
    text: emailContent(nameFirst)[action].text,
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
