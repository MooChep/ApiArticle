const express = require('express')
const router = express.Router()
const ArticleService = require('../services/article-service.js');

// Routes front :
// export const routes: Routes = [
//   {path: "connexion", component: Connexion},
//   {path: "connexion/:message", component: Connexion}, // page de connexion avec affichage de message d'erreur
//   {path: "inscription", component: Inscription},
//   {path: "forgot-password", component: ForgotPassword},
//   {path: "confirm/:reason", component: ConfirmationPage},
//   {path: "logout", component: Logout},
//   {path: '**', redirectTo: '/list'} // redirige toutes les routes inconnues

//   {path: "article/:id", component: ArticleDetailsPage},
//   ok {path: "delete/:id", component: DeleteArticlePage},
//   {path: "modify/:id", component: ModifyArticlePage},
//   ok {path: "create", component: CreateArticlePage},
//   ok {path: "list", component: MainPage},

// ];

router.post("/create-article", async (request, response) => {

    const serviceResponse = await ArticleService.createArticle();

    return response.json(serviceResponse);
});

router.get("/articles", async (request, response) => {

    const serviceResponse = await ArticleService.getAll();

    return response.json(serviceResponse);
});

router.post("/delete-article/:uid", async (request, response) => {
  const uid = request.params.uid;
  const serviceResponse = await ArticleService.deleteArticle(uid);

  return response.json(serviceResponse);
});

router.get('/detail-article/:uid', async (request, response) => {
  const uid = request.params.uid;
  const serviceResponse = await ArticleService.detailArticle(uid);

  return response.json(serviceResponse);
});

router.post("/modify-article", async (request, response) => {
  const data = request.body;
  return response.json(await ArticleService.modifyArticle(data));
})
module.exports = router