const frango = document.querySelector('[data-js="frango"]')
const carne = document.querySelector('[data-js="carne"]')
const refrigerante = document.querySelector('[data-js="refrigerante"]')
const suco = document.querySelector('[data-js="suco"]')
const pudim = document.querySelector('[data-js="pudim"]')
const sorvete = document.querySelector('[data-js="sorvete"]')
const botaoFinalizarPedido = document.querySelector('[data-js="botao-finalizar-pedido"]')
let prato
let bebida
let sobremesa 

frango.addEventListener('click', () => {
  frango.classList.add('borda-vermelha')
  carne.classList.remove('borda-vermelha')
  prato = 'Frango'
})

carne.addEventListener('click', () => {
  carne.classList.add('borda-vermelha')
  frango.classList.remove('borda-vermelha')
  prato = 'Carne'
})

refrigerante.addEventListener('click', () => {
  refrigerante.classList.add('borda-vermelha')
  suco.classList.remove('borda-vermelha')
  bebida = 'Coca-cola'
})

suco.addEventListener('click', () => {
  suco.classList.add('borda-vermelha')
  refrigerante.classList.remove('borda-vermelha')
  bebida = 'Suco'
})

pudim.addEventListener('click', () => {
  pudim.classList.add('borda-vermelha')
  sorvete.classList.remove('borda-vermelha')
  sobremesa = 'Pudim gelado'
})

sorvete.addEventListener('click', () => {
  sorvete.classList.add('borda-vermelha')
  pudim.classList.remove('borda-vermelha')
  sobremesa = 'Sorvete'
})

botaoFinalizarPedido.addEventListener('click', () => {
  const mensagem = `Olá. Gostaria de pedir um combo ${prato}, ${bebida} e ${sobremesa}` 

  window.open(`https://wa.me/+55999999999?text=${mensagem}`) //abre uma nova aba no navegador
})