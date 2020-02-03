// Quando eu não quero importar tudo, e apenas algumas coisas de uma lib eu utilizo as chaves {}
const { Router }        = require('express');
const DevController     = require('./controllers/DevController');
const SearchController  = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.put('/devs/:github_username', DevController.update);
routes.delete('/devs/:github_username', DevController.destroy);

routes.get('/search', SearchController.index);

module.exports = routes;