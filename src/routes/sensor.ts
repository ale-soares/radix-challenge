import express from "express";
import controller from "../controllers/sensor";

const router = express.Router();

router.get("/", controller.getSensors);
router.post("/", controller.addSensor);

export default router;
