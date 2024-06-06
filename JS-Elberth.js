
let estoque = {

    'carne': { 'qtde': 10, 'preco': 49.90 },
    'frango': { 'qtde': 15, 'preco': 39.90 },
    'linguiça': { 'qtde': 20, 'preco': 29.90 },
    'queijo': { 'qtde': 10, 'preco': 34.90 }
}

function validarCamposObrigatorios(produto, quantidade, preco, data) {

    // RN.01 - Validação de Campos Obrigatórios

    return produto && (quantidade != null) && (preco != null) && data
}
function validarQuantidadeProdutos(quantidade) {

    // RN.02 - Validação de Quantidade de Produtos

    return quantidade > 0
}
function validarPrecoUnitario(preco) {

    // RN.03 - Validação de Preço Unitário

    return preco > 0
}
function obterDataTransacao() {

    // RN.04 - Registro de Data da Transação

    return new Date().toLocaleString()
}
function gerarNumeroTransacao() {

    // RN.05 - Geração de Número de Transação Único

    return Math.floor(Math.random() * 10000000)
}
function registrarHistorico(mensagem) {

    // RN.06 - Histórico de Alterações

    let historico = document.getElementById('historicoVendas')
    let li = document.createElement('li')
    li.textContent = mensagem
    historico.appendChild(li)
}
function validarEstoque(produto, quantidade) {

    //RN.07 - Atualização Automática do estoque

    if (estoque[produto] != null) {

        if (estoque[produto].qtde >= quantidade) {

            return true

        }

    } else {

        return false

    }
}
function atualizarEstoque(produto, quantidade) {

    alert(`Antes: ${estoque[produto].qtde}`)
    estoque[produto].qtde = estoque[produto].qtde - quantidade
    alert(`Depois: ${estoque[produto].qtde}`)

}

function registrarVenda(produto, quantidade, preco) {

    let data = obterDataTransacao()
    let numeroTransacao = gerarNumeroTransacao()

    let validaCampos = validarCamposObrigatorios(produto, quantidade, preco, data)
    let validaQuantidade = validarQuantidadeProdutos(quantidade)
    let validaPreco = validarPrecoUnitario(preco)
    let validaEstoque = validarEstoque(produto, quantidade)

    if (validaCampos) {

        if (validaQuantidade) {

            if (validaPreco) {

                if (validaEstoque) {

                    atualizarEstoque(produto, quantidade)

                    return (`Venda registrada com sucesso!   
                        [ Transação: ${numeroTransacao} --
                        ${produto}  --  ${quantidade} unids  --  R$${preco} por unidade --
                        Em ${data} ]`
                    )

                } else { return ('Erro na validação da quantidade de produtos') }


            } else { return ('Erro na validação do preço unitário') }

        } else { return ('Erro na validação da quantidade de produtos') }

    } else { return ("Erro na validação dos campos obrigatórios") }

}

function vender() {

    let produto = document.getElementById('produto').value
    let quantidade = document.getElementById('quantidade').value
    let preco = document.getElementById('preco').value

    let mensagem = registrarVenda(produto, quantidade, preco)

    registrarHistorico(mensagem)
}

