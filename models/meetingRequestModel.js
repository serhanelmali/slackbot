import mongoose from "mongoose";

const meetingRequestSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  group_id: {
    type: String,
    required: true,
  },
  topics: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("MeetingRequest", meetingRequestSchema);
