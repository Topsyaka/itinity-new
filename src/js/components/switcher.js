const ACTIVE_TAB_CLASS = 'active';
const VISIBLE_TAB_CLASS = 'visible';

function toogleSwitch(){
  const switcherInput = document.querySelector('#switcher');
  const switchLabel = document.querySelector('label[for="switcher"]');
  const checkedClass = 'checked';
  if(switcherInput){
    switcherInput.addEventListener('change', (e) => {
      const isChecked = e.target.checked;
      toggleTabs(isChecked);
      isChecked
        ?switchLabel.classList.add(checkedClass)
        :switchLabel.classList.remove(checkedClass);
    })
  }
}

function toggleTabs(checked) {
  const ideaTabs = document.querySelectorAll('.idea-tabs__tab');
  console.log(ideaTabs);
  ideaTabs.forEach((item) => {
    const itemId = item.id;
    if (checked) {
      if (itemId === 'yes-idea'){
        addActive(item, () => {
          item.classList.add(VISIBLE_TAB_CLASS);
        })
      }else{
        removeClasses(item, () => {
          item.classList.remove(ACTIVE_TAB_CLASS);
        });
      } 
    }else{
      if (itemId === 'no-idea'){
        addActive(item, () => {
          item.classList.add(VISIBLE_TAB_CLASS);
        })
      }else{
        removeClasses(item, () => {
          item.classList.remove(ACTIVE_TAB_CLASS);
        });
      } 
    }
  });
}

function addActive(item, callback) {
  item.classList.add(ACTIVE_TAB_CLASS);
  setTimeout(() => {
    callback(item);
  }, 300);
}

function removeClasses(item, callback) {
  item.classList.remove(VISIBLE_TAB_CLASS);
  callback(item);
}

toogleSwitch();