import mongoose from "mongoose";

const groupSchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  category_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Group", groupSchema);
