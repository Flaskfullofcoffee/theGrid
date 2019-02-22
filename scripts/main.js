let tempeBtn = document.getElementById('tempeBtn');
let phxBtn = document.getElementById('phxBtn');
const map = document.querySelector('iframe');
let map1 = document.querySelector('.map1');
let map2 = document.querySelector('.map2');


tempeBtn.addEventListener('click', changeImg2);
phxBtn.addEventListener('click', changeImg1);

function changeImg2() {
  map2.classList.add('mapHide');
  map1.classList.remove('mapHide');
}
function changeImg1() {
  map1.classList.add('mapHide');
  map2.classList.remove('mapHide');
}
