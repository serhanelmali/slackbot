import mongoose from "mongoose";

const serverChannelSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  channel_slack_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("ServerChannel", serverChannelSchema);
