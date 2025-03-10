const express = require("express");
const formationModel = require("../models/formation.js");
const formationRouter = express.Router();

// Récupère la liste de toutes les formations
formationRouter.get("/formations", async (req, res) => {
  const formations = await formationModel.find();
  res.json(formations);
});

// Crée une nouvelle formation
formationRouter.post("/formations", async (req, res) => {
  const newFormation = req.body;
  console.log(newFormation);
  await formationModel.create(newFormation);
  res.json({ message: "Formation created" });
});

// Récupère une formation par son id
formationRouter.get("/formations/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour une formation par son id
formationRouter.put("/formations/:id", async (req, res) => {
  const id = req.params.id;
  const updatedFormation = req.body;
  await formationModel.findByIdAndUpdate(id, updatedFormation);
  res.json({ message: "Formation updated" });
});

// Supprime une formation par son id
formationRouter.delete("/formations/:id", async (req, res) => {
  const id = req.params.id;
  await formationModel.findByIdAndDelete(id);
  res.json({ message: "Formation deleted" });
});

module.exports = formationRouter;
