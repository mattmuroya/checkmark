import './style.css';
import favicon from './img/favicon.ico'

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});

const closeMenuBtn = document.getElementById('close-menu-btn');
closeMenuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('-translate-x-full');
});