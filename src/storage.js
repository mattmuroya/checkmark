import tasks from "./tasks";

const storage = (() => {

  // function updateLocalStorage() {
  //   if (storageAvailable('localStorage')) {
  //     localStorage.clear();
  //     for (let i = 0; i < tasks.taskList.length; i++) {
  //       localStorage.setItem(`${i}-title`, tasks.taskList[i].title);
  //       localStorage.setItem(`${i}-details`, tasks.taskList[i].details);
  //       localStorage.setItem(`${i}-dueDate`, tasks.taskList[i].dueDate);
  //       localStorage.setItem(`${i}-modified`, tasks.taskList[i].modifiedDateParsed);
  //       localStorage.setItem(`${i}-starred`, tasks.taskList[i].isStarred.toString());
  //       localStorage.setItem(`${i}-completed`, tasks.taskList[i].isCompleted.toString());
  //     }
  //   }
  // }

  function updateLocalStorage() {
    if (storageAvailable('localStorage')) {
      localStorage.clear();
      for (let i = 0; i < tasks.taskList.length; i++) {
        localStorage.setItem(i, JSON.stringify(tasks.taskList[i]));
      }
    }
  }

  function retrieveLocalStorage() {
    if (storageAvailable('localStorage')) {
      // tasks.taskList.length = 0; // clear the tasklist if anything exists
      for (let i = 0; i < localStorage.length; i++) {
        let taskToAdd = JSON.parse(localStorage[i]);
        console.log(taskToAdd);
        tasks.addNewTask(
            taskToAdd.title,
            taskToAdd.details,
            taskToAdd.dueDate,
            taskToAdd.isStarred,
            taskToAdd.isCompleted)
      }
    }
  }

  function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
  }

  return {
    updateLocalStorage,
    retrieveLocalStorage,
  };

})();

export default storage;