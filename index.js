import express from "express";

import { connectDB } from "./db.js";
import slackServerRouter from "./routes/slackServerRouter.js";

const app = express();

app.use(express.json());

app.use("/servers", slackServerRouter);

app.listen(8181, () => {
  console.log("Uygulama port 8181 ile aktif oldu.");
  connectDB();
});
