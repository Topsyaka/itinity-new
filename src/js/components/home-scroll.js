function initScroll(){
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

function setAnimation() {
  const cell = document.querySelectorAll('.cell');
  const len = cell.length;
  $(cell).removeClass('hovered')
  const rand = parseInt(Math.random()*len, 10);
  const rand2 = parseInt(Math.random()*len, 10);
  $(cell[rand]).addClass('hovered');
  $(cell[rand2]).addClass('hovered');
}
setInterval(() => {
  setAnimation();
}, 1000)

initScroll();