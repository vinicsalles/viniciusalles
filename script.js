function menuShow() {
  let img = document.querySelector('.img-hamb')
  let menuMobile = document.querySelector('.nav-list');
  menuMobile.classList.toggle('ativandonav');
  img.classList.toggle('img-hambativa')
  img.classList.toggle('img-hamb')
}