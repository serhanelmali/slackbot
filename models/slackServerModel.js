import mongoose from "mongoose";

const slackServerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("SlackServer", slackServerSchema);
