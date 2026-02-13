module.exports = {

    /**
     * Retourne un IDAOArticle
     */
    getDAOArticle : () => {
        // MODE : SEQUELIZE
        if (process.env.BDD_MODE === "sequelize") {
            const DAOArticleSequelize = require("./sequelize/daoarticle-sequelize.js");
            return new DAOArticleSequelize();
        }
        // MODE : Mongoose
        else if (process.env.BDD_MODE === "mongodb") {
            const DAOArticleMongoose = require("./mongoose/daoarticle-mongoose.js");
            return new DAOArticleMongoose();
        }
    }
}