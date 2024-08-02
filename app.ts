import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/sensor";
import mongoose from "mongoose";

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
app.use("/", routes);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
