const express = require("express");
const hobbyModel = require("../models/hobby.js");
const hobbyRouter = express.Router();

// Récupère la liste de tous les hobbies
hobbyRouter.get("/hobbies", async (req, res) => {
  const hobbies = await hobbyModel.find();
  res.json(hobbies);
});

// Crée un nouveau hobby
hobbyRouter.post("/hobbies", async (req, res) => {
  const newHobby = req.body;
  console.log(newHobby);
  await hobbyModel.create(newHobby);
  res.json({ message: "Hobby created" });
});

// Récupère un hobby par son id
hobbyRouter.get("/hobbies/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour un hobby par son id
hobbyRouter.put("/hobbies/:id", async (req, res) => {
  const id = req.params.id;
  const updatedHobby = req.body;
  await hobbyModel.findByIdAndUpdate(id, updatedHobby);
  res.json({ message: "Hobby updated" });
});

// Supprime un hobby par son id
hobbyRouter.delete("/hobbies/:id", async (req, res) => {
  const id = req.params.id;
  await hobbyModel.findByIdAndDelete(id);
  res.json({ message: "Hobby deleted" });
});

module.exports = hobbyRouter;
