import './style.css';
import favicon from './img/favicon.ico'

const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const closeMenuBtn = document.getElementById('close-menu-btn');
const shade = document.getElementById('shade');

menuBtn.addEventListener('click', () => {
  toggleSidebar();
});

closeMenuBtn.addEventListener('click', () => {
  toggleSidebar();
});

shade.addEventListener('click', () => {
  toggleSidebar();
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768 && !shade.classList.contains('hidden')) {
    toggleSidebar();
  }
});

const toggleSidebar = () => {
  sidebar.classList.toggle('-translate-x-full');
  shade.classList.toggle('hidden');
};