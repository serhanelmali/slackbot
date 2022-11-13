import mongoose from "mongoose";

const standupItemSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  group_id: {
    type: String,
    required: true,
  },
  made_yesterday: {
    type: String,
    required: true,
  },
  todo_today: {
    type: String,
    required: true,
  },
  blocker: {
    type: String,
    required: true,
  },
  meeting_request: {
    type: String,
    required: true,
  },
});

export default mongoose.model("StandupItem", standupItemSchema);
