const cabecalho = document.getElementById('cabecalho__nav')

const icone = document.querySelector('[data-abrir-menu]')

const menu = document.querySelector('.cabecalho__menu')

function abrirMenu() {
  cabecalho.classList.toggle('ativo')
  icone.classList.toggle('fa-close')
  icone.classList.toggle('fa-bars')
}

function setListeners() {
  menu.addEventListener('click', abrirMenu)
}
