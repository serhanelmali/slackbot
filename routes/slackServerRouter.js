import express from "express";
import slackServerModel from "../models/slackServerModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const slackServers = await slackServerModel.find();
    res.status(200).json(slackServers);
  } catch (error) {
    res.status(404).json({ message: error.message, status: 404 });
  }
});

router.post("/", async (req, res) => {
  try {
    const slackServer = await slackServerModel.create(req.body);

    return res.status(201).json(slackServer);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedSlackServer = await slackServerModel.findByIdAndUpdate(
      id,
      {
        name,
      },
      { new: true }
    );

    return res.status(200).json(updatedSlackServer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSlackServer = await slackServerModel.findByIdAndDelete(id);

    return res.status(202).json(deletedSlackServer);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

export default router;
