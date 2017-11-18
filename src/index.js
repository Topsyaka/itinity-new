import _ from 'lodash';
import Main from './js/main';
import Switcher from './js/components/switcher';
import Header from './js/components/header';
import styles from './styles/index.scss';
import HomeScroll from './js/components/home-scroll';
import 'normalize.css';
import 'bootstrap';
import SmoothScroll from './js/components/smoothScroll';
require('smoothscroll-polyfill').polyfill();

function component() {
  var element = document.createElement('div');
  Main.sayHello();
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  

  return element;
}
Switcher.toogleSwitch();
Header.toogleHeader();
HomeScroll.initScroll();
window.__forceSmoothScrollPolyfill__ = true;
SmoothScroll.initScroll();