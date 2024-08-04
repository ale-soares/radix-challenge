import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./src/routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

mongoose
  .connect(process.env.DB_STR as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err: unknown) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsConfig = {
  origin: [
    "http://localhost:3000",
    "http://localhost:5173",
    "http://radix-test-front.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsConfig));

app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
