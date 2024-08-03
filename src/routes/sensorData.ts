import express from "express";
import controller from "../controllers/sensorData";

const sensorDataRoutes = express.Router();

sensorDataRoutes.get("/", controller.getAllSensorData);
sensorDataRoutes.get("/:equipmentId", controller.getSensorData);
sensorDataRoutes.post("/", controller.addSensorData);
sensorDataRoutes.delete("/:dataId", controller.deleteSensorData);
sensorDataRoutes.patch("/:dataId", controller.updateSensorData);

export default sensorDataRoutes;
