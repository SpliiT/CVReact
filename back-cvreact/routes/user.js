const express = require("express");
const userModel = require("../models/user.js");
const userRouter = express.Router();
const bcrypt = require("bcrypt");

// Récupère la liste de tous les utilisateurs
userRouter.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.json(users);
});

// Crée un nouvel utilisateur
userRouter.post("/users/register", async (req, res) => {
  await userModel.deleteOne();
  const newUser = req.body;
  newUser.password = await bcrypt.hash(newUser.password, 10);
  console.log(newUser);
  await userModel.create(newUser);
  res.json({ message: "User created" });
});

// Connexion d'un utilisateur
userRouter.post("/users/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Invalid email or password" });
  }
  res.json({ message: "Login successful" });
});

// Déconnexion d'un utilisateur
userRouter.post("/users/logout", async (req, res) => {
  res.json({ message: "Logout successful" });
});

// Récupère un utilisateur par son id
userRouter.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  res.json(req.params);
});

// Met à jour un utilisateur par son id
userRouter.put("/users/:id", async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;
  await userModel.findByIdAndUpdate(id, updatedUser);
  res.json({ message: "User updated" });
});

// Supprime un utilisateur par son id
userRouter.delete("/users/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndDelete(id);
  res.json({ message: "User deleted" });
});

module.exports = userRouter;
