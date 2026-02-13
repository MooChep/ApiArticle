require('dotenv').config();
const cors = require('cors')
const express = require('express');

// Initialiser l'application back
const app = express();
app.use(express.json());
app.use(cors());

// MODE : SEQUELIZE
if (process.env.BDD_MODE === 'sequelize') {
  require('./dao/sequelize/connexion').connect_sequelize();
}
// MODE : Mongoose
else if (process.env.BDD_MODE === 'mongodb') {
  require('./dao/mongoose/connexion').connect_mongoose();
}

// Injecter route externe
// -- importer
const articleRoutes = require('./routes/articles-routes.js');
// -- injecter dans le serveur
app.use(articleRoutes);
// Démarrer le serveur avec le port 3000
app.listen(3000, () => {
  console.log('Le serveur a démarré');

});
// Autoriser l'envoi de JSON
