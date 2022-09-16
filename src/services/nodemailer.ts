import nodemailer from "nodemailer";
import config from "../config";

const gmailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.GMAIL_EMAIL,
    pass: config.GMAIL_PASSWORD,
  },
});

export const notifyByEmail = async (data: any) => {
  const subject = "CVPortfolio";
  const html = `<h1>Nuevo mensaje de ${data.user}</h1>\n\n
  <h2>${data.msg}</h2>`;

  const response = await gmailTransporter.sendMail({
    from: {
      name: config.GMAIL_NAME || "",
      address: config.GMAIL_EMAIL || "",
    },
    to: config.GMAIL_EMAIL,
    subject,
    html,
  });
  return response;
};
