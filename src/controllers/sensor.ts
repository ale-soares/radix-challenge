import { Request, Response } from "express";
import Sensor, { ISensor, TSensor } from "../models/Sensor";

const getSensors = async (req: Request, res: Response) => {
  try {
    const sensors: ISensor[] = await Sensor.find({});

    res.send(sensors);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default { getSensors };
