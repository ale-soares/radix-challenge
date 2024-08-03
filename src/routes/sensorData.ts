import express from "express";
import controller from "../controllers/sensorData";

const router = express.Router();

router.get("/", controller.getAllSensorData);
router.get("/:equipmentId", controller.getSensorData);
router.post("/", controller.addSensorData);
router.delete("/:dataId", controller.deleteSensorData);
router.patch("/:dataId", controller.updateSensorData);

export default router;
