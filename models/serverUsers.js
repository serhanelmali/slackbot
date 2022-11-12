import mongoose from "mongoose";

const serverUserSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  group_id: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ServerUser", serverUserSchema);
