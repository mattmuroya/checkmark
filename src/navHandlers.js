import dynamicHandlers from "./dynamicHandlers";
import tasks from "./tasks";
import { format } from "date-fns";

const navHandlers = (() => {

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

   // filters

   let tasksToDisplay = tasks.taskList;
   const pageHeader = document.getElementById('page-header');
  //  const pageSubheader = document.getElementById('page-subheader');

   const activateNavItems = (() => {
     let navItems = document.querySelectorAll('.nav-item');
     navItems.forEach(nav => {

      nav.addEventListener('click', () => {
        navItems.forEach(navs => {
          navs.classList.remove('bg-emerald-400', 'text-white');
          navs.dataset.state = 'inactive';
        });

        nav.classList.add('bg-emerald-400', 'text-white');
        nav.dataset.state = 'active';

        //filter display window

        tasksToDisplay = determineTasksToDisplay(nav);

        if (window.innerWidth < 768) toggleSidebar();

        dynamicHandlers.redrawTasks(tasksToDisplay);
      });
     });
   })();

   function determineTasksToDisplay(nav) {
    if (nav.id === 'nav-all') {
      pageHeader.textContent = 'All Items';
      // pageSubheader.textContent = 'Nothing is impossible.';
      return tasks.taskList;
    } else if (nav.id === 'nav-starred') {
      pageHeader.textContent = 'Starred';
      // pageSubheader.textContent = `Don't let your dreams be dreams.`;
      return tasks.taskList.filter(taskItem => taskItem.isStarred); // implicit return
    } else if (nav.id === 'nav-today') {
      pageHeader.textContent = 'Due Today';
      // pageSubheader.textContent = 'Yesterday, you said "tomorrow."';
      return tasks.taskList.filter(taskItem => {
        let date = Date.parse(taskItem.dueDateString),
            today = Date.parse(format(new Date(), 'P'));
        return (date === today);
      });
    } else if (nav.id === 'nav-upcoming') {
      pageHeader.textContent = 'Next 7 Days';
      // pageSubheader.textContent = 'What are you waiting for?';
      return tasks.taskList.filter(taskItem => {
        let date = Date.parse(taskItem.dueDateString),
            today = Date.parse(format(new Date(), 'P')),
            week = today + (1000 * 60 * 60 * 24 * 6);
        return (date >= today && date <= week);
      });
    }
    else if (nav.id === 'nav-overdue') {
      pageHeader.textContent = 'Overdue';
      // pageSubheader.textContent = 'JUST DO IT.';
      return tasks.taskList.filter(taskItem => {
        let date = Date.parse(taskItem.dueDateString),
            today = Date.parse(format(new Date(), 'P'));
        return (date < today);
      });
    }
   }

  //  activateNavItems();

   return { tasksToDisplay, determineTasksToDisplay };

})();

export default navHandlers;