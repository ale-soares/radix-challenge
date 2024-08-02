import { Document, model, Schema } from "mongoose";

export type TSensor = {
  equipmentId?: string;
  timestamp?: string;
  value?: number;
};

export interface ISensor extends TSensor, Document {}

const SensorSchema = new Schema({
  equipmentId: {
    type: String,
  },
  timestamp: {
    type: String,
  },
  value: {
    type: Number,
  },
});

const Sensor = model<ISensor>("Sensor", SensorSchema);

export default Sensor;
