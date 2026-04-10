const items = document.querySelectorAll('.menu-item');

items.forEach(item => {
  item.addEventListener('click', () => {
    alert(item.querySelector('h3').innerText);
  });
});