import mongoose from "mongoose";

const eventTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("EventType", eventTypeSchema);
