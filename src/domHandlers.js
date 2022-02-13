const domHandlers = (() => {

  // menu behavior

  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const shade = document.getElementById('shade');

  function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    shade.classList.toggle('hidden');
  };

  menuBtn.addEventListener('click', toggleSidebar);
  closeMenuBtn.addEventListener('click', toggleSidebar);
  shade.addEventListener('click', toggleSidebar);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && !shade.classList.contains('hidden')) {
      toggleSidebar();
    }
  });

  // collapsible context menu - experiemental

  const menu = document.getElementById('2');
  const btn = document.getElementById('1');
  btn.addEventListener('click', () => {
    menu.classList.toggle('scale-0');
  });
})();

export default domHandlers;