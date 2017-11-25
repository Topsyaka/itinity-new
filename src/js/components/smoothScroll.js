require('smoothscroll-polyfill').polyfill();
window.__forceSmoothScrollPolyfill__ = true;

function initScroll(){
  const scrollButtons = document.querySelectorAll('.toggle-button');
  console.log()
  scrollButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      const targetHref = e.target.getAttribute('href');
      e.preventDefault();
      console.log(targetHref);
      document.querySelector(targetHref).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}

initScroll();