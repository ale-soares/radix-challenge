import { Request, Response } from "express";
import { createReadStream } from "fs";
import { parse } from "fast-csv";
import { TSensorData } from "../models/SensorData";

const uploadFile = async (req: Request, res: Response) => {
  try {
    if (req.file == undefined) {
      return res.status(400).send("Please upload a CSV file!");
    }

    let uploadedData: TSensorData[] = [];
    let path = "./resources/static/assets/uploads/" + req.file.filename;

    createReadStream(path)
      .pipe(parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        uploadedData.push(row);
      })
      .on("end", () => {
        // SensorData.bulkCreate(uploadedData)
        //   .then(() => {
        //     res.status(200).send({
        //       message:
        //         "The file: " +
        //         req?.file?.originalname +
        //         " got uploaded successfully!!",
        //     });
        //   })
        //   .catch((error: any) => {
        //     res.status(500).send({
        //       message: "Couldn't import data into database!",
        //       error: error.message,
        //     });
        //   });
        console.log("end");
      });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Failed to upload the file: " + req?.file?.originalname,
    });
  }
};

export default {
  uploadFile,
};
