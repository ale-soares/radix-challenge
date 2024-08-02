import { Request, Response } from "express";
import Sensor, { ISensorData, TSensorData } from "../models/SensorData";

const getSensorsData = async (res: Response) => {
  try {
    const sensors: ISensorData[] = await Sensor.find({});

    res.send(sensors);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const addSensorData = async (req: Request, res: Response) => {
  const { equipmentId, timestamp, value } = req.body;

  try {
    const newSensor: TSensorData = { equipmentId, timestamp, value };
    const sensor = new Sensor(newSensor);
    await sensor.save();

    res.status(201).send(`Sensor data for ${sensor.equipmentId} added.`);
  } catch (error) {
    res.status(500).send(error);
  }
};

// const deleteSensorData = async (req: Request, res: Response) => {
//   const deleteTitle = req.params;

//   try {
//     const word = await Word.findOneAndDelete<IWord>({ title: deleteTitle });

//     if (!word) {
//       return res.status(404).send(response[404]);
//     }

//     res.send(word);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send(error);
//   }
// };

export default { getSensorsData, addSensorData };
