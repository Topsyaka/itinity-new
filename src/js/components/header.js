function toogleHeader(){
  const header = document.querySelector('.header');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    let newScroll = window.scrollY;
    if(newScroll == 0){
      header.classList.remove('js-show');
      header.classList.remove('js-hide');  
    }
    else{
      lastScroll = newScroll;
      header.classList.add('js-show');
      header.classList.remove('js-hide');
    }
  })
}

document.querySelector('button.hamburger')
    .addEventListener('click', (e) => {
      document.querySelector('button.hamburger').classList.toggle('is-active');
      document.querySelector('.header-nav.desctop').classList.toggle('is-active');
      document.querySelector('body').classList.toggle('no-scroll')
    });

toogleHeader();