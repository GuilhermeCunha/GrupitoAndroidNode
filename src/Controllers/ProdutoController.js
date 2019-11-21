require('dotenv/config');
const Produto = require('../Models/Produto');

module.exports = {
    async listarProdutos(req, res){
        const produtos = await Produto.find();
        return res.json(produtos);
    },
    async criarProduto(req, res){
        const { id, nome, preco, mensagem } = req.body;
        var produto = await Produto.create({
            id,
            nome,
            preco,
            mensagem,
        });

        if(produto){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
    },
    async editarProduto(req, res){
        const { id, nome, preco, mensagem } = req.body;
        
        const sucesso = await Produto.findOneAndUpdate({ id }, { 
            nome,
            preco, 
            mensagem,
        }).then(function(result){
            return true;
        }).catch(e =>{
            return false;
        })

        if(sucesso){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
    },
    async removerProduto(req, res){
        const { id } = req.body;
        const sucesso = await Produto.findOneAndRemove({ id },function(err,result){
            if(err) return false;
            return true;
        });

        if(sucesso){
            res.status(200).json({
                sucesso: true
            });
        }else{
            res.status(500).json({
                sucesso: false
            });
        }
        
    },
}