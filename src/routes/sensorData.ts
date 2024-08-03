import express from "express";
import controller from "../controllers/sensorData";

const router = express.Router();

router.get("/", controller.getSensorsData);
router.post("/", controller.addSensorData);
router.delete("/:id", controller.deleteSensorData);

export default router;
