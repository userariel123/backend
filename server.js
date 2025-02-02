//Importation des modules nécessaires
const express = require('express');  //module Express pour pouvoir créer ton serveur et définir tes routes.
const mongoose = require('mongoose'); //module Mongoose pour communiquer avec la base de données MongoDB.
const cors = require('cors');  //module CORS pour permettre à ton serveur d'accepter les requêtes provenant d'autres domaines.
require('dotenv').config(); // Permet de lire les variables d'environnement du fichier .env (garder les informations sensibles hors du code source.)


//Configuration de l'application Express:
const app = express(); 
app.use(cors()); 
app.use(express.json());


// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté avec succès'))
  .catch(err => console.log(err));

// Ajout des routes d'authentification
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes); //associer les routes d'authentification à l'URL /api/auth.

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`)); //démarrer le serveur 
