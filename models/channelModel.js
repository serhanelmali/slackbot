import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  channel_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Channel", channelSchema);
