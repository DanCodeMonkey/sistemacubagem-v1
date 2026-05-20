const produtoService =
    require('../services/produtoService')

function criar(req, res) {

    const produto =
        produtoService.criarProduto(req.body)

    res.status(201).json(produto)
}

function listar(req, res) {

    const produtos =
        produtoService.listarProdutos()

    res.json(produtos)
}

module.exports = {
    criar,
    listar
}