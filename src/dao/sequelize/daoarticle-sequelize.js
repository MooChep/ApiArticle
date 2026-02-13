const Article = require("./article-model.js");
const IDAOArticle = require("../idaoarticle.js");

class DAOArticleSequelize extends IDAOArticle {
  /**
   * Override explicitement si la methode existe dans le parent
   */
  async insert(article) {
    return await Article.create(article);
  }

  /**
   * Override explicitement si la methode existe dans le parent
   */
  async selectAll() {
    return await Article.findAll();
  }

  async deleteArticle(uid) {
    const article = await Article.findOne({ where: { uid } });
    if (!article) return null;

    await article.destroy();
    return article;
  }

  async detailArticle(uid) {
    return await Article.findOne({ where: { uid } });
  }

  async modifyArticle(article) {

    const [rowsUpdated] = await Article.update(
      {
        title: article.title,
        desc: article.desc,
        author: article.author,
        imgPath: article.imgPath
      },
      {
        where: { uid: article.uid }
      }
    );
    if (rowsUpdated === 0) return null;

    return await Article.findOne({
      where: { uid: article.uid },
    });

  }
}

module.exports = DAOArticleSequelize;