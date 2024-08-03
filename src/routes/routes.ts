import express from "express";

import sensorData from "../controllers/sensorData";
import uploader from "../controllers/upload";

const router = express.Router();
import uploadFile from "../middleware/upload";

router.get("/", sensorData.getAllSensorData);
router.get("/:equipmentId", sensorData.getSensorData);
router.post("/", sensorData.addSensorData);
router.delete("/:dataId", sensorData.deleteSensorData);
router.patch("/:dataId", sensorData.updateSensorData);

router.post("/upload", uploadFile.single("file"), uploader.uploadFile);

export default router;
