import express, { Express } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import router from "./src/routes/routes";

const app: Express = express();
const port = process.env.PORT || 3000;

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USR}:${process.env.DB_PSW}@cluster0.1q6uhd1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err: unknown) => console.log(err));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const corsConfig = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsConfig));

app.use("/", router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
