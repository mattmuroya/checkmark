import './style.css';
import favicon from './img/favicon.ico'

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu-btn');
const shade = document.getElementById('shade');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  shade.classList.toggle('hidden');
});

closeMenuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  shade.classList.toggle('hidden');
});

shade.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
  shade.classList.toggle('hidden');
});
                                                         