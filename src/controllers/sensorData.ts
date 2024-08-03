import { Request, Response } from "express";
import SensorData, { ISensorData, TSensorData } from "../models/SensorData";

const getAllSensorData = async (req: Request, res: Response) => {
  try {
    const allData: ISensorData[] = await SensorData.find({});

    res.send(allData);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};

const getSensorData = async (req: Request, res: Response) => {
  const { equipmentId } = req.params;

  try {
    const data: ISensorData[] = await SensorData.find({
      equipmentId: equipmentId,
    });

    if (!data) {
      return res
        .status(404)
        .send(`Sensor data for equipment: "${equipmentId}" not found.`);
    }

    res.send(data);
  } catch (error) {
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
      .send(
        `Sensor data for equipment: "${data.equipmentId}" added successfully.`
      );
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteSensorData = async (req: Request, res: Response) => {
  const { dataId } = req.params;

  try {
    const data: ISensorData | null = await SensorData.findByIdAndDelete(dataId);

    if (!data) {
      return res
        .status(404)
        .send(`Sensor data for data id: "${dataId}" not found.`);
    }

    res.send(`Sensor data for data id: "${dataId}" deleted successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateSensorData = async (req: Request, res: Response) => {
  const { dataId } = req.params;

  try {
    const updatedData = req.body;
    const data: ISensorData | null = await SensorData.findByIdAndUpdate(
      dataId,
      updatedData,
      { new: true }
    );

    if (!data) {
      return res
        .status(404)
        .send(`Sensor data for data id: "${dataId}" not found.`);
    }

    res.send(`Sensor data for data id: "${dataId}" updated successfully.`);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default {
  getAllSensorData,
  getSensorData,
  addSensorData,
  deleteSensorData,
  updateSensorData,
};
