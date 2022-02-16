import dynamicHandlers from "./dynamicHandlers";
import navHandlers from "./navHandlers";
import tasks from "./tasks";

const staticHandlers = (() => {

  // static button event listeners

  const newTaskBtn = document.getElementById('new-task-btn');
  const modal = document.getElementById('modal');
  const closeModalBtn = document.getElementById('close-modal-btn');

  const submitBtn = document.getElementById('submit-btn');
  const modalHeader = document.getElementById('modal-header');

  function toggleModal() {

    form.reset();

    modalHeader.textContent = 'New Task';
    submitBtn.textContent = 'Submit';

    form.removeEventListener('submit', activateEditMode.submitEdits);
    form.addEventListener('submit', submitNewTask);

    modal.classList.toggle('hidden');
  }

  newTaskBtn.addEventListener('click', toggleModal);

  modal.addEventListener('click', (e) => {
    if (e.target.id === 'modal') { // id='modal' is the overlay, not the form itself
      toggleModal();
    }
  });

  closeModalBtn.addEventListener('click', () => {
    toggleModal();
  });

  window.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        toggleModal();
      }
    }
  });

  // handle new submissions

  const form = document.getElementById('form');
  const titleField = document.getElementById('title');
  const detailsField = document.getElementById('details');
  const dueDateField = document.getElementById('due-date');
  const starredField = document.getElementById('starred');

  function submitNewTask(e) {
    e.preventDefault();
    let titleValue = titleField.value,
        detailsValue = detailsField.value,
        dueDateValue = dueDateField.value === '' ?
            dueDateField.value :
            new Date(dueDateField.value),
        starredValue = starredField.checked;
    tasks.addNewTask(titleValue, detailsValue, dueDateValue, starredValue);
    toggleModal();
    dynamicHandlers.redrawTasks(navHandlers.tasksToDisplay);
  }

  // handle task editing

  function activateEditMode(currentTask) {

    toggleModal();

    form.removeEventListener('submit', submitNewTask);

    modalHeader.textContent = 'Edit Task';
    submitBtn.textContent = 'Save';

    titleField.value = currentTask.title;
    detailsField.value = currentTask.details;
    dueDateField.value = currentTask.dueDateYYYYMMDD;
    starredField.checked = currentTask.isStarred;

    form.addEventListener('submit', submitEdits, {once:true});

    function submitEdits(e) {
      e.preventDefault();
  
      currentTask.title = titleField.value;
      currentTask.details = detailsField.value;
      currentTask.dueDate = dueDateField.value;
      currentTask.isStarred = starredField.checked;
      currentTask.modifiedDate = new Date();
  
      toggleModal();
      dynamicHandlers.redrawTasks(navHandlers.tasksToDisplay);
    }

    // need additional listeners to remove submitEdits handler from within function scope

    modal.addEventListener('click', (e) => {
      if (e.target.id === 'modal') { // id='modal' is the overlay, not the form itself
        form.removeEventListener('submit', submitEdits);
      }
    });
  
    closeModalBtn.addEventListener('click', () => {
      form.removeEventListener('submit', submitEdits);
    });  

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          form.removeEventListener('submit', submitEdits);
        }
    });
  }

  return {
    activateEditMode,
  };

})();

export default staticHandlers;