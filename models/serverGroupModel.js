import mongoose from "mongoose";

const serverGroupSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ServerGroup", serverGroupSchema);
