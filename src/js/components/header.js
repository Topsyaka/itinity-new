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



toogleHeader();