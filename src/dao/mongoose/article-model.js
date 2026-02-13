const mongoose = require("mongoose");

const Article = mongoose.model('Article', {uid: String, title: String}, "articles");

module.exports = Article