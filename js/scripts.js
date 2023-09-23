const frango = document.querySelector('[data-js="frango"]')
const carne = document.querySelector('[data-js="carne"]')

frango.addEventListener('click', () => {
  frango.classList.add('borda-vermelha')
  carne.classList.remove('borda-vermelha')
})

carne.addEventListener('click', () => {
  carne.classList.add('borda-vermelha')
  frango.classList.remove('borda-vermelha')
})
