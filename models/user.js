import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin","analyst","viewer"],
    default: "viewer"
  },
  status: {
    type: String,
    default: "active"
  }
});

export default mongoose.model("User", userSchema);