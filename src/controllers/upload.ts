import { Request, Response } from "express";

const uploadFile = async (req: Request, res: Response) => {
  // const { equipmentId, timestamp, value } = req.body;
  // try {
  //   const newSensor: TSensorData = { equipmentId, timestamp, value };
  //   const data = new SensorData(newSensor);
  //   await data.save();
  //   res
  //     .status(201)
  //     .send(`Sensor data for equipment: "${data.equipmentId}" added.`);
  // } catch (error) {
  //   res.status(500).send(error);
  // }
};

export default { uploadFile };
