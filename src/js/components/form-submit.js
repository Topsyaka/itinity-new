const form = document.getElementById('get-touch');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputList = Array.from(form.querySelectorAll('input'));
  const selectList = Array.from(form .querySelectorAll('select'));
  //const textarea = Array.from(from.querySelectorAll('textarea'));
  const controllsArray = inputList.concat(selectList)//.concat(textarea);

  console.log(controllsArray);

})