import _ from 'lodash';
import Main from './js/main';
import Switcher from './js/components/switcher';
import Header from './js/components/header';
import styles from './styles/index.scss';
import 'normalize.css';
import 'bootstrap';

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