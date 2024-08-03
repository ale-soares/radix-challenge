import { Request, Response } from "express";
import SensorData, { ISensorData, TSensorData } from "../models/SensorData";

const getSensorsData = async (req: Request, res: Response) => {
  try {
    const allData: ISensorData[] = await SensorData.find({});

    res.send(allData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const addSensorData = async (req: Request, res: Response) => {
  const { equipmentId, timestamp, value } = req.body;

  try {
    const newSensor: TSensorData = { equipmentId, timestamp, value };
    const data = new SensorData(newSensor);
    await data.save();

    res
      .status(201)
      .send(`Sensor data for equipment: "${data.equipmentId}" added.`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSensorData = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await SensorData.findByIdAndDelete(id);

    if (!data) {
      return res.status(404).send(`Sensor data for ${id} not found.`);
    }

    res.send(`Sensor data for id: "${id}" deleted.`);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

export default { getSensorsData, addSensorData, deleteSensorData };
