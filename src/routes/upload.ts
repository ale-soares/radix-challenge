import express from "express";
import controller from "../controllers/upload";

const uploadRoutes = express.Router();

uploadRoutes.post("/upload", controller.uploadFile);

export default uploadRoutes;
