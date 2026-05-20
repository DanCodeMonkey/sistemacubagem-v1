const produtos = []

function calcularCubagem(
    largura,
    altura,
    comprimento
) {

    return (
        largura *
        altura *
        comprimento
    ) / 6000
}

function criarProduto(dados) {

    const cubagem =
        calcularCubagem(
            dados.largura,
            dados.altura,
            dados.comprimento
        )

    const pesoUtilizado =
        dados.peso > cubagem
            ? dados.peso
            : cubagem

    const produto = {
        ...dados,
        cubagem,
        pesoUtilizado
    }

    produtos.push(produto)

    return produto
}

function listarProdutos() {
    return produtos
}

module.exports = {
    criarProduto,
    listarProdutos
}