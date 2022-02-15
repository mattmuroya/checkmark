import dynamicHandlers from "./dynamicHandlers";
import tasks from "./tasks";

const staticHandlers = (() => {

  // responsive menu behavior

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

  // static button event listeners

  const newTaskBtn = document.getElementById('new-task-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  function toggleModal() {
    modal.classList.toggle('hidden');
  }

  newTaskBtn.addEventListener('click', toggleModal);
  closeModalBtn.addEventListener('click', () => {
    toggleModal();
    form.reset();
  });

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') { // id='modal' is the overlay, not the form itself
      toggleModal();
      form.reset();
    }
  });
  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        toggleModal();
        form.reset();
      }
    }
  });

  const form = document.getElementById('form');
  const titleField = document.getElementById('title');
  const detailsField = document.getElementById('details');
  const dueDateField = document.getElementById('due-date');
  const starredField = document.getElementById('starred');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let titleValue = titleField.value,
        detailsValue = detailsField.value,
        dueDateValue = dueDateField.value === '' ?
            dueDateField.value :
            new Date(dueDateField.value),
        starredValue = starredField.checked;
    tasks.addNewTask(titleValue, detailsValue, dueDateValue, starredValue);
    toggleModal();
    form.reset();
    dynamicHandlers.redrawTasks();
  });

})();

export default staticHandlers;