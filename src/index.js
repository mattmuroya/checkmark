import './style.css';

const content = document.getElementById('content');
content.addEventListener('click', () => {
  content.classList.toggle('bg-green-400');
  console.log('test');
});