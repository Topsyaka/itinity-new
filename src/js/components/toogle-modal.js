const modalToggle = document.querySelectorAll('.header-nav__button');
const modal = document.getElementById('lets-talk')

modalToggle.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('clicked')
    const isToggled = modal.classList.contains('visible');
    if(!isToggled){
      modal.classList.add('visible');
    }else{
      modal.classList.remove('visible');
    }
  })
})