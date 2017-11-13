export default class Switcher{
  static toogleSwitch(){
    const switcherInput = document.querySelector('#switcher');
    const switchLabel = document.querySelector('label[for="switcher"]');
    const checkedClass = 'checked';

    switcherInput.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      isChecked
        ?switchLabel.classList.add(checkedClass)
        :switchLabel.classList.remove(checkedClass);
    })
  }
}