import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  total_points: {
    type: Number,
    required: true,
  },
  weekly_points: {
    type: Number,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
