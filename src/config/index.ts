import dotenv from "dotenv";

dotenv.config();

export default {
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
  GMAIL_NAME: process.env.GMAIL_NAME,
};
