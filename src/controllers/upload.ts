import { Request, Response } from "express";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import SensorData, { TSensorData } from "../models/SensorData";

const uploadFile = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).send("CSV file not uploaded");
    }

    let uploadedData: TSensorData[] = [];
    let filePath = `./resources/static/assets/uploads/${req.file.filename}`;

    createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw new Error(error.message);
      })
      .on("data", (row) => {
        const { equipmentId, timestamp, value } = row;
        uploadedData.push({
          equipmentId,
          timestamp: new Date(timestamp),
          value: parseFloat(value),
        });
      })
      .on("end", async () => {
        try {
          await SensorData.insertMany(uploadedData);
          res
            .status(200)
            .send(`File: "${req?.file?.originalname}" uploaded successfully`);
        } catch (error) {
          res
            .status(500)
            .send(`Error: "${error}" inserting data into the database`);
        }
      });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send(`File: "${req?.file?.originalname}" failed to upload`);
  }
};

export default { uploadFile };
