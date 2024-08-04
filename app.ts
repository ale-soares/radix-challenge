import express, { Express, Request, Response } from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import router from "./src/routes/routes";

const app: Express = express();

const port = process.env.PORT || 3000;

mongoose
  .connect(`${process.env.MONGO_URI}`)
  .then(() => {
    console.log("Successfully connected ");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });

// const connectDB = async () => {
//   try {
//     await mongoose.connect(connectionString);
//     console.log(`MongoDB connected`);
//   } catch (error) {
//     console.error(`Error: ${error} `);
//   }
// };

// mongoose
//   .connect(process.env.DB_STR as string)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err: unknown) => console.log(err));

// connectDB();

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

router.get("/", (req: Request, res: Response) => {
  res.send("API");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
