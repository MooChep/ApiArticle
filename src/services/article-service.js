const  { logger } = require("../logger.js");
const { makeService } = require("./service-helper.js");
const { v4 : uuidv4 }= require('uuid');

// Import DAOFactory pour récupérer notre dao de manière abstraite
const DAOFactory = require("../dao/dao-factory.js");

module.exports = {

    createArticle : async (article) => {

        // L'objet article a insérer
        const generatedId = uuidv4();
        article = { ...article, uid: generatedId};

        const newArticle = await DAOFactory.getDAOArticle().insert(article);

        return makeService("200", "Article crée avec succès", newArticle);
    },

    getAll : async () => {
        // Select all
        const allMyArticles = await DAOFactory.getDAOArticle().selectAll();

        return makeService("200", "Tout les articles ont été récupérés", allMyArticles);
    },

    deleteArticle : async (uid) => {
      const deleteArticle = await DAOFactory.getDAOArticle().deleteArticle(uid);
      if (deletedArticle == null) {
        return makeService('404', 'Article non trouvé ', null);
      }
      return makeService("200", "Article deleted", deleteArticle);
    },

    detailArticle : async (uid) => {
      const detail = await DAOFactory.getDAOArticle().detailArticle(uid);
      if (detail == null) {
        return makeService('404', 'Article non trouvé ', null);
      }
      return makeService("200", "Article detail", detail);
    },

    modifyArticle : async (uid, article) => {
      const modified = await DAOFactory.getDAOArticle().modifyArticle(uid, article);
      if (modified == null) {
        return makeService('404', 'Article non trouvé ', null);
      }
      return makeService("200", "Article modified", modified);
    }
}