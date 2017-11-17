export default class HomeScroll{
  static initScroll(){
    const wrapper = document.querySelector('.wrapper');
    const dataScrollElements = document.querySelectorAll('section[data-scroll]');
    const offset = -200;

    // Generating all offset of elements
    window.addEventListener('scroll', () => {
      dataScrollElements.forEach((item) => {
        elementInView(item, offset);
      })
    });
  }
}

function elementInView(element, offset){
  const elementRect = element.getBoundingClientRect();
  const elementDataScroll = element.dataset.scroll;
  const elementHeight = element.offsetHeight;
  const elementTop = elementRect.top;
  const body = document.querySelector('body');


  if(elementTop + offset < 0 && Math.abs(elementTop) < elementHeight){
    if(body.className != elementDataScroll){
      body.className = '';
      body.classList.add(elementDataScroll);
    } 
  }
}