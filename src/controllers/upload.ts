import { Request, Response } from "express";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import SensorData, { TSensorData } from "../models/SensorData";

const uploadFile = async (req: Request, res: Response) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let uploadedData: TSensorData[] = [];
    let filePath = "./resources/static/assets/uploads/" + req.file.filename;

    createReadStream(filePath)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw new Error(error.message);
      })
      .on("data", (row) => {
        const { equipmentId, timestamp, value } = row;
        uploadedData.push({
          equipmentId,
          timestamp, // Make sure to parse timestamp as Date
          value: parseFloat(value), // Ensure value is a number
        });
      })
      .on("end", async () => {
        try {
          // Insert data into the database
          await SensorData.insertMany(uploadedData);
          res.status(200).send({
            message:
              "Uploaded the file successfully: " + req?.file?.originalname,
          });
        } catch (error) {
          console.error("Error inserting data into the database:", error);
          res.status(500).send({
            message: "Failed to insert data into the database.",
          });
        }
      });
  } catch (error) {
    console.error("Error uploading file:", error);
    res.status(500).send({
      message: "Failed to upload the file: " + req?.file?.originalname,
    });
  }
};

export default {
  uploadFile,
};
