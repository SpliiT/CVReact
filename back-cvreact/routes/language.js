const express = require("express");
const languageModel = require("../models/language.js");
const languageRouter = express.Router();

// Récupère la liste de toutes les langues
languageRouter.get("/languages", async (req, res) => {
  const languages = await languageModel.find();
  res.json(languages);
});

// Crée une nouvelle langue
languageRouter.post("/languages", async (req, res) => {
  const newLanguage = req.body;
  console.log(newLanguage);
  await languageModel.create(newLanguage);
  res.json({ message: "Language created" });
});

// Récupère une langue par son id
languageRouter.get("/languages/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour une langue par son id
languageRouter.put("/languages/:id", async (req, res) => {
  const id = req.params.id;
  const updatedLanguage = req.body;
  await languageModel.findByIdAndUpdate(id, updatedLanguage);
  res.json({ message: "Language updated" });
});

// Supprime une langue par son id
languageRouter.delete("/languages/:id", async (req, res) => {
  const id = req.params.id;
  await languageModel.findByIdAndDelete(id);
  res.json({ message: "Language deleted" });
});

module.exports = languageRouter;
