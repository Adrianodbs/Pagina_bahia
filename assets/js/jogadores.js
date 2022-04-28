const posicao = document.querySelectorAll('.posicao')
const cartaoPosicao = document.querySelectorAll('jogadores__card')

posicao.forEach(lista => {
  lista.addEventListener('click', () => {
    const cartaoAberto = document.querySelector('.aberto')
    cartaoAberto.classList.remove('aberto')

    const idCartaoSelecionado = lista.attributes.id.value

    const cartaoParaAbrir = document.getElementById(
      'cartao-' + idCartaoSelecionado
    )
    cartaoParaAbrir.classList.add('aberto')

    const ativoNaListagem = document.querySelector('.jogador__ativo')
    ativoNaListagem.classList.remove('jogador__ativo')

    const selecionadoNaListagem = document.getElementById(idCartaoSelecionado)
    selecionadoNaListagem.classList.add('jogador__ativo')
  })
})
