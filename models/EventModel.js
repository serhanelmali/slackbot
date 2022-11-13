import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  server_id: {
    type: Number,
    required: true,
  },
  channel_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  owner_id: {
    type: String,
    required: true,
  },
  target_id: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Event", eventSchema);
