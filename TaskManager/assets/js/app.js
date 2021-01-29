const taskInput = document.querySelector('#task');               //the task input text field

const form = document.querySelector('#task-form');             //The form at the top

const filter = document.querySelector('#filter');                      //the task filter text field

const taskList = document.querySelector('.collection');          //The ul

const clearBtn = document.querySelector('.clear-tasks');      //the all task clear button


// form submit 
form.addEventListener('submit', addNewTask);

// Clear All Tasks
clearBtn.addEventListener('click', clearAllTasks);

//   Filter Task 
filter.addEventListener('keyup', filterTasks);

taskList.addEventListener('click', removeTask);
 // Add New  Task Function definition 
function addNewTask(e) {
    if (taskInput.value === '') 
    {
        taskInput.style.borderColor = "red";
        return;//avoiding else statement

    }
    taskInput.style.borderColor = "black";
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
    const link = document.createElement('a');
    link.innerHTML = '<i class="fa fa-remove"></i>';
    link.className = 'delete-item secondary-content';
    li.appendChild(link);
    taskList.appendChild(li);


   e.preventDefault();    //disable form submission

}


// Remove Task function definition 
function removeTask(e) {

    if (e.target.parentElement.classList.contains('delete-item'))
        {
        if (confirm('Are You Sure about that ?'))
        {
            e.target.parentElement.parentElement.remove();
        }

    }

}

// Clear Task Function definition 
function clearAllTasks() {
   
    //This is the first way 
    // taskList.innerHTML = '';    

    //  Second Way 
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }

}
// Filter tasks function definition 
function filterTasks(e) {
    var value1= document.getElementById("filter").value;
    var items=document.querySelectorAll('.collection-item');
    items.forEach(item => {
        if (item.textContent.indexOf(value1)== -1){
            item.style.display = "none";
        }
        else {
            item.style.display = "block";
           }
    });

}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
