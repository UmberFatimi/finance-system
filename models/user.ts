import mongoose, { Schema, Document } from "mongoose";
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: "buyer" | "seller";
  createdAt: Date;
  updatedAt: Date;
}
const UserSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["buyer", "seller"],
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.User || mongoose.model("User", UserSchema);
