const express = require("express");
const experienceModel = require("../models/experience.js");
const experienceRouter = express.Router();

// Récupère la liste de toutes les expériences
experienceRouter.get("/experiences", async (req, res) => {
  const experiences = await experienceModel.find();
  res.json(experiences);
});

// Crée une nouvelle expérience
experienceRouter.post("/experiences", async (req, res) => {
  const newExperience = req.body;
  console.log(newExperience);
  await experienceModel.create(newExperience);
  res.json({ message: "Experience created" });
});

// Récupère une expérience par son id
experienceRouter.get("/experiences/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour une expérience par son id
experienceRouter.put("/experiences/:id", async (req, res) => {
  const id = req.params.id;
  const updatedExperience = req.body;
  await experienceModel.findByIdAndUpdate(id, updatedExperience);
  res.json({ message: "Experience updated" });
});

// Supprime une expérience par son id
experienceRouter.delete("/experiences/:id", async (req, res) => {
  const id = req.params.id;
  await experienceModel.findByIdAndDelete(id);
  res.json({ message: "Experience deleted" });
});

module.exports = experienceRouter;
