const express = require("express");
const skillsModel = require("../models/skill.js");
const skillsRouter = express.Router();

// Récupère la liste de toutes les compétences
skillsRouter.get("/skills", async (req, res) => {
  const skills = await skillsModel.find();
  res.json(skills);
});

// Crée une nouvelle compétence
skillsRouter.post("/skills", async (req, res) => {
  const newSkill = req.body;
  console.log(newSkill);
  await skillsModel.create(newSkill);
  res.json({ message: "Skill created" });
});

// Récupère une compétence par son id
skillsRouter.get("/skills/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour une compétence par son id
skillsRouter.put("/skills/:id", async (req, res) => {
  const id = req.params.id;
  const updatedSkill = req.body;
  await skillsModel.findByIdAndUpdate(id, updatedSkill);
  res.json({ message: "Skill updated" });
});

// Supprime une compétence par son id
skillsRouter.delete("/skills/:id", async (req, res) => {
  const id = req.params.id;
  await skillsModel.findByIdAndDelete(id);
  res.json({ message: "Skill deleted" });
});

module.exports = skillsRouter;
