import { Document, model, Schema } from "mongoose";

export type TSensorData = {
  equipmentId?: string;
  timestamp?: Date;
  value?: number;
};

export interface ISensorData extends TSensorData, Document {}

const SensorDataSchema = new Schema({
  equipmentId: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
  value: {
    type: Number,
  },
});

const SensorData = model<ISensorData>("SensorData", SensorDataSchema);

export default SensorData;
