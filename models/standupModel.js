import mongoose from "mongoose";

const standupSchema = new mongoose.Schema({
  target_server_id: {
    type: String,
    required: true,
  },
  target_channel_id: {
    type: String,
    required: true,
  },
  target_group_id: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Standup", standupSchema);
