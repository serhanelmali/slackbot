import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  server_id: {
    type: String,
    required: true,
  },
  prize_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("InventorySchema", inventorySchema);
