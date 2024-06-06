
function validacaoNovaConta() {

    let dataOcorrencia = '2024-06-06'
    let fornecedor = 'Mathias Borracharia'
    let valor = 199.90
    let categoria = 'Manutenção Frota'
    let dataVencimento = '2024-07-29'

    let dataPagamento = "2024-06-10"
    let situacaoPagamento = 'Liquidado'
    let anexo = "comprovanteSantander.pdf"

    let botao = "[Alterar] [Apagar]"

    console.log(
        `Conta cadastrada com sucesso! 

        Data: ${dataOcorrencia}
        Fornecedor: ${fornecedor}
        Valor: R$${valor}
        Categoria: ${categoria}
        Vencimento: ${dataVencimento}

        Pagamento: ${dataPagamento}
        Situação: ${situacaoPagamento}
        Anexo: ${anexo}

        ${botao}`
    )
}

validacaoNovaConta()