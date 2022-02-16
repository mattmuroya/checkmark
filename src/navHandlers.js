import dynamicHandlers from "./dynamicHandlers";
import tasks from "./tasks";

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

   function activateNavItems() {
     let navItems = document.querySelectorAll('.nav-item');
     navItems.forEach(nav => {

      nav.addEventListener('click', () => {
        navItems.forEach(navs => {
          navs.classList.remove('bg-emerald-400', 'text-white');
        });

        nav.classList.add('bg-emerald-400', 'text-white');

        //filter display window

        if (nav.id === 'nav-all') {
          tasksToDisplay = tasks.taskList;
        } else if (nav.id === 'nav-starred') {
          tasksToDisplay = tasks.taskList.filter(taskItem => taskItem.isStarred); // implicit return
        } else if (nav.id === 'nav-today') {
          tasksToDisplay = tasks.taskList.filter(taskItem => {
            let date = Date.parse(taskItem.dueDateString),
                today = Date.parse(format(new Date(), 'P'));
            return (date === today);
          });
        } else if (nav.id === 'nav-upcoming') {
          tasksToDisplay = tasks.taskList.filter(taskItem => {
            let date = Date.parse(taskItem.dueDateString),
                today = Date.parse(format(new Date(), 'P')),
                week = today + (1000 * 60 * 60 * 24 * 6);
            return (date >= today && date <= week);
          });
        }
        else if (nav.id === 'nav-overdue') {
          tasksToDisplay = tasks.taskList.filter(taskItem => {
            let date = Date.parse(taskItem.dueDateString),
                today = Date.parse(format(new Date(), 'P'));
            return (date < today);
          });
        }

        dynamicHandlers.redrawTasks(tasksToDisplay);

      });
     });
   }

   activateNavItems();

   return { tasksToDisplay };

})();

export default navHandlers;