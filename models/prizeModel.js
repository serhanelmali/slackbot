import mongoose from "mongoose";

const eventTypeSchema = new mongoose.Schema({
  server_id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price_as_point: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  icon_name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("EventType", eventTypeSchema);
