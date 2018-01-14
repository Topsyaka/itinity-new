const modalToggle = document.querySelectorAll('.header-nav__button');
const modal = document.getElementById('lets-talk');
const modalButton = document.querySelector('.lets-talk-button');

modalToggle.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const isToggled = modal.classList.contains('visible');

    if(!isToggled){
      modal.classList.add('visible');
      document.querySelector('.header-nav.desctop').classList.remove('is-active');
      document.querySelector('body').classList.add('no-scroll');
      document.querySelector('.header-button').classList.remove('is-active');
    }else{
      modal.classList.remove('visible');
    }
  })
});

modalButton.addEventListener('click', () => {
  modal.classList.remove('visible');
  document.querySelector('body').classList.remove('no-scroll');
});