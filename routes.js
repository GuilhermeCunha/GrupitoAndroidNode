const express = require('express');
const routes = express.Router();


//Controllers
const UserController = require('./src/Controllers/UserController');
const ProdutoController = require('./src/Controllers/ProdutoController');

routes.get('/listar-usuarios', UserController.listarUsuarios);

routes.post('/criar-usuario', UserController.criarUsuario);
routes.delete('/remover-usuario', UserController.removerUsuario);
routes.put('/editar-usuario', UserController.editarUsuario);
routes.post('/login', UserController.login);

routes.get('/listar-produtos', ProdutoController.listarProdutos);
routes.post('/criar-produto', ProdutoController.criarProduto);
routes.delete('/remover-produto', ProdutoController.removerProduto);
routes.put('/editar-produto', ProdutoController.editarProduto);

module.exports = routes;