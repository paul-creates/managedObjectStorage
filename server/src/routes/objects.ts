import express from "express";
import { ObjectModel, ObjectData, Metadata } from "../models/Object";

const router = express.Router();

// Get all objects
router.get("/", async (req, res) => {
  try {
    const objects = await ObjectModel.getAll();
    res.json(objects);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch objects" });
  }
});

// Get object by ID
router.get("/:id", async (req, res) => {
  try {
    const object = await ObjectModel.getById(parseInt(req.params.id));
    if (!object) {
      return res.status(404).json({ error: "Object not found" });
    }
    res.json(object);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch object" });
  }
});

// Create new object
router.post("/", async (req, res) => {
  try {
    const objectData: ObjectData = req.body;
    const newObject = await ObjectModel.create(objectData);
    res.status(201).json(newObject);
  } catch (error) {
    res.status(500).json({ error: "Failed to create object" });
  }
});

// Add metadata to object
router.post("/:id/metadata", async (req, res) => {
  try {
    const objectId = parseInt(req.params.id);
    const metadata: Metadata[] = req.body;

    // Verify object exists
    const object = await ObjectModel.getById(objectId);
    if (!object) {
      return res.status(404).json({ error: "Object not found" });
    }

    // Add metadata
    await ObjectModel.addMetadata(objectId, metadata);
    res.status(201).json({ message: "Metadata added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add metadata" });
  }
});

// Get object metadata
router.get("/:id/metadata", async (req, res) => {
  try {
    const objectId = parseInt(req.params.id);

    // Verify object exists
    const object = await ObjectModel.getById(objectId);
    if (!object) {
      return res.status(404).json({ error: "Object not found" });
    }

    const metadata = await ObjectModel.getMetadata(objectId);
    res.json(metadata);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch metadata" });
  }
});

export default router;
