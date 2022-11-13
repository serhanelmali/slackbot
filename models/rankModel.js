import mongoose from "mongoose";

const rankSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Rank", rankSchema);
