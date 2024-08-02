import { Request, Response } from "express";
import Sensor, { ISensor, TSensor } from "./../models/Sensor";

const getSensors = async (req: Request, res: Response) => {
  try {
    const sensors: ISensor[] = await Sensor.find({});

    res.send(sensors);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const addSensor = async (req: Request, res: Response) => {
  const { equipmentId, timestamp, value } = req.body;

  try {
    const newSensor: TSensor = { equipmentId, timestamp, value };
    const sensor = new Sensor(newSensor);
    await sensor.save();

    res.status(201).send(`Sensor data for ${sensor.equipmentId} added.`);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default { getSensors, addSensor };
