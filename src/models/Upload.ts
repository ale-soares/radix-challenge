import { Document, model, Schema } from "mongoose";

export type TUpload = {
  equipmentId?: string;
  timestamp?: string;
  value?: number;
};

export interface IUpload extends TUpload, Document {}

const UploadSchema = new Schema({
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

const Upload = model<IUpload>("Upload", UploadSchema);

export default Upload;
