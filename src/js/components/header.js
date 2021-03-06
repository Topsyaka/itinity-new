export default class Header{
  static toogleHeader(){
    const header = document.querySelector('.header');
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      let newScroll = window.scrollY;
      if(newScroll == 0){
        header.classList.remove('js-show');
        header.classList.remove('js-hide');  
      }
      else if(lastScroll < newScroll){
        lastScroll = newScroll;
        header.classList.remove('js-show');
        header.classList.add('js-hide');        
      }else{
        lastScroll = newScroll;
        header.classList.add('js-show');
        header.classList.remove('js-hide');
      }
    })
  }
}