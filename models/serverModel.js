import mongoose from "mongoose";

const serverSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  server_id: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Server", serverSchema);
