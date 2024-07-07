import mongoose, { Schema, Document, model, models } from "mongoose";

// Interface for Service
interface IService extends Document {
  title: string;
  description: string;
  price: string;
}

// Schema for Service
const ServiceSchema: Schema<IService> = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const ServiceModel = models.Service || model<IService>("Service", ServiceSchema);

export default ServiceModel;
