const modalToggle = document.getElementById('toggle-modal');
const modal = document.getElementById('lets-talk')

modalToggle.addEventListener('click', () => {
  modal.classList.toggle('visible');
})