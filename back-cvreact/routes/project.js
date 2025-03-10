const express = require("express");
const projectModel = require("../models/project.js");
const projectRouter = express.Router();

// Récupère la liste de tous les projets
projectRouter.get("/projects", async (req, res) => {
  const projects = await projectModel.find();
  res.json(projects);
});

// Crée un nouveau projet
projectRouter.post("/projects", async (req, res) => {
  const newProject = req.body;
  console.log(newProject);
  await projectModel.create(newProject);
  res.json({ message: "Project created" });
});

// Récupère un projet par son id
projectRouter.get("/projects/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour un projet par son id
projectRouter.put("/projects/:id", async (req, res) => {
  const id = req.params.id;
  const updatedProject = req.body;
  await projectModel.findByIdAndUpdate(id, updatedProject);
  res.json({ message: "Project updated" });
});

// Supprime un projet par son id
projectRouter.delete("/projects/:id", async (req, res) => {
  const id = req.params.id;
  await projectModel.findByIdAndDelete(id);
  res.json({ message: "Project deleted" });
});

module.exports = projectRouter;
