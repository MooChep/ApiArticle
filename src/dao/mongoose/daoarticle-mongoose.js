const Article = require("./article-model.js");
const IDAOArticle = require("../idaoarticle.js");
const ArticleService = require('./daoarticle-mongoose');

class DAOArticleMongoose extends IDAOArticle {
    /**
     * Override explicitement si la methode existe dans le parent
     */
    async insert(article) {
        // Intancier l'objet
        const newArticle = new Article(article);
        // Save
        return await newArticle.save();
    }

    async selectAll() {
        return await Article.find();
    }

    async deleteArticle(uid) {
      return await Article.findOneAndDelete(
        { uid: uid },
        { new: true, runValidators: true },
      );
    }

    async modifyArticle(article) {
      return await Article.findOneAndUpdate(
        { uid: article.uid },
        { title: article.title },
        { runValidators: true },
      );
    }

    async detailArticle(id) {
      return await Article.findOne({uid:id});
    }
}

module.exports = DAOArticleMongoose;