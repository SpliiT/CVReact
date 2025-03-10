const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Importation de CORS
require("dotenv").config();

const languageRouter = require("./routes/language.js");
const projectRouter = require("./routes/project.js");
const experienceRouter = require("./routes/experience.js");
const skillsRouter = require("./routes/skills.js");
const hobbyRouter = require("./routes/hobbies.js");
const userRouter = require("./routes/user.js");

const app = express();

// Connexion à MongoDB
mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("Connexion à MongoDB établie avec succès");
  })
  .catch((error) => {
    console.error(
      "Impossible de se connecter à la base de données MongoDB : ",
      error
    );
  });

// Configuration CORS
app.use(
  cors({
    origin: "http://localhost:5173", // Adresse de ton front-end
    methods: "GET,POST,PUT,DELETE", // Méthodes autorisées
    credentials: true, // Autorise les cookies et en-têtes d'authentification
  })
);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(
  "",
  languageRouter,
  projectRouter,
  experienceRouter,
  skillsRouter,
  hobbyRouter,
  userRouter
);

// Configuration du port et démarrage du serveur
const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(
    `Serveur en cours sur le port ${PORT} à l'url : http://localhost:${PORT}`
  )
);

module.exports = app;
