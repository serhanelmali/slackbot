import mongoose from "mongoose";

const slackServerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  server_slack_id: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SlackServer", slackServerSchema);
