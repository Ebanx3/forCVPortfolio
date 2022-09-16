import express, { Request, Response } from "express";
import cors from "cors";
import { notifyByEmail } from "./nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/CVmessage", async (req: Request, res: Response) => {
  const { user, msg } = req.body;
  if (!user || !msg) {
    res.status(400).json({
      data: "Invalid body",
    });
    return;
  }
  notifyByEmail({ user, msg });
  res.status(200).json({
    data: "ok",
  });
});

app.use((req: Request, res: Response) => {
  res.status(404).json({
    data: "Undefined Path",
  });
});

export const initServer = () => {
  app.listen(process.env.PORT || 8080, () => {
    console.log("server up!");
  });
};
