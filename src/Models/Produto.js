const mongoose = require('mongoose');


const ProdutoSchema = new mongoose.Schema({
    id: Number,
    nome: String,
    preco: Number,
    mensagem: String,
});

module.exports = mongoose.models.Produto || mongoose.model('Produto', ProdutoSchema);