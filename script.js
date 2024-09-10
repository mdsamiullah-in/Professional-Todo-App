

var add = document.getElementById("addNew");

add.onclick = function(){
  // Check the current display state of the workBox element
  if (document.getElementById("workBox").style.display === "none") {
      // Show workBox and hide addForm
      document.getElementById("workBox").style.display = "block";
      document.getElementById("addForm").style.display = "none"
      // Update button appearance to 'Add' state
      add.innerHTML = "Add New Task"; // Change back to original button content
      add.style.width = ""; // Reset width
      add.style.borderRadius = ""; // Reset border-radius
      add.style.boxShadow = ""; // Reset box-shadow
      add.style.fontSize = ''; // Reset font size
      add.className = ""
  } else {
      // Hide workBox and show addForm
      document.getElementById("workBox").style.display = "none";
      document.getElementById("addForm").style.display = "flex";
      // Update button appearance to 'Close' state
      add.innerHTML = ""; // Hide text
      add.style.width = "45px"; // Set specific width
      add.style.borderRadius = "50%"; // Set border-radius
      add.style.boxShadow = "0 0 0 0"; // Remove shadow
      add.style.fontSize = '20px'; // Set font size
      add.className = "fa-solid fa-xmark"; // Change icon to xmark
  }
}



var addBoxListWork = document.getElementById("addBoxListWork");

addBoxListWork.onclick = function(){

   if(document.getElementById("addBoxList").style.display == "flex"){

    document.getElementById("addBoxList").style.display = "none"
    addBoxListWork.innerHTML = "Add New Task"; // Hide text
    addBoxListWork.style.width = ""; // Set specific width
    addBoxListWork.style.borderRadius = ""; // Set border-radius
    addBoxListWork.style.boxShadow = ""; // Remove shadow
    addBoxListWork.style.fontSize = ''; // Set font size
    addBoxListWork.className = ""; // Change icon to xmark

   }else{
    document.getElementById("addBoxList").style.display = "flex"

      addBoxListWork.innerHTML = ""; // Hide text
      addBoxListWork.style.width = "45px"; // Set specific width
      addBoxListWork.style.borderRadius = "50%"; // Set border-radius
      addBoxListWork.style.boxShadow = "0 0 0 0"; // Remove shadow
      addBoxListWork.style.fontSize = '20px'; // Set font size
      addBoxListWork.className = "fa-solid fa-xmark"; // Change icon to xmark

   }
}






document.getElementById("searchIcon").onclick = function(){ 

  var search =   document.getElementById("search")

  if(search.style.display == "block"){
    search.style.display = "none"
  }else{
    search.style.transition = "0.2s"
    search.style.display = "block"
    search.focus()
  }


}



document.getElementById("openMain").onclick = function(){
  document.getElementById("homePage").style.display = "none"
  document.getElementById("dailyBox").style.display = "block"
  var bottom = document.getElementById("mainbottomNavbar");
  bottom.style.display = "none";
  bottom.style.bottom = "0px";
  bottom.style.left = "0px"
}




document.getElementById("dailyButton").onclick = function(){
   document.getElementById("MainPage").style.display = "none"
   document.getElementById("dailyBox").className = "animate__animated animate__fadeIn"
   document.getElementById("dailyBox").style.display = "block"
}


document.getElementById("cutDaily").onclick = function(){
  document.getElementById("MainPage").className = "animate__animated animate__fadeIn"
     document.getElementById("MainPage").style.display = "block"
   document.getElementById("dailyBox").style.display = "none"
}



document.getElementById("notification").onclick = function(){
   document.getElementById("MainPage").style.display = "none"
   document.getElementById("dailyBox").style.display = "none"
   document.getElementById("notificationBox").classList = "animate__animated animate__fadeIn"
   document.getElementById("notificationBox").style.display = "block"
}


document.getElementById("backNotification").onclick = function(){
  document.getElementById("MainPage").className = "animate__animated animate__fadeIn"
  document.getElementById("MainPage").style.display = "block"
   document.getElementById("dailyBox").style.display = "none"
   document.getElementById("notificationBox").classList = ""
   document.getElementById("notificationBox").style.display = "none"
}



 // Check if the browser supports the Web Speech API
 if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.continuous = false; // Stop automatically after one sentence
  recognition.interimResults = false; // Only final results are returned
  recognition.lang = 'en-US'; // Set language

  const todoInput = document.getElementById('todoInput');
  const voiceBtn = document.getElementById('voiceBtn');
  const addTodoBtn = document.getElementById('addTodoBtn');
  const todoList = document.getElementById('todoList');

  voiceBtn.addEventListener('click', () => {
      recognition.start(); // Start speech recognition
  });

  recognition.onresult = function(event) {
      const transcript = event.results[0][0].transcript; // Get the spoken text
      todoInput.value = transcript; // Set the input field with the recognized text
  };

  recognition.onerror = function(event) {
      console.error('Speech recognition error:', event.error);
  };

  // Add task to the list
 todoInput.addEventListener('click', () => {
      const task = todoInput.value.trim();
      if (task) {
          const todoItem = document.createElement('div');
          todoItem.className = 'todo-item';
          todoItem.textContent = task;
          todoList.appendChild(todoItem);
          todoInput.value = ''; // Clear input field
      }
  });

} else {
  alert('Sorry, your browser does not support speech recognition.');
}


var addList = document.getElementById("addList");

addList.onclick = function(){
  if( document.getElementById("addingListForm").style.display == "flex"){
     document.getElementById("addingListForm").style.display = "none"
      this.className = "ri-add-fill"
           document.getElementById("label").innerHTML = "Add list"
    }else{
     document.getElementById("addingListForm").style.display = "flex"
     this.style.fontSize = "22px"
     this.className = "ri-close-fill"
     document.getElementById("label").innerHTML = "Cut list box"
    }
 
}

document.getElementById("addListBtn").onclick = function() {
  var workName = document.getElementById("listName").value;
  var activityStatus = document.getElementById("listStatus").value;

  if (workName.trim() === '' || activityStatus.trim() === '') {
      alert("Please fill out both fields.");
      return;
  }

  var listBox = document.getElementById("listBox");
  var div = document.createElement("div");
  div.className = "list";
  var listId = Date.now(); // Unique ID based on timestamp

  div.innerHTML = `
      <p class="time">${activityStatus}</p>
      <div class="icon">🎨</div>
      <h2>${workName}</h2>
      <label>14 total tasks</label>
  `;

  // Save to local storage
  saveToLocalStorage(listId, workName, activityStatus);

  listBox.appendChild(div);
  document.getElementById("listName").value = '';
  document.getElementById("listStatus").value = '';
}

function saveToLocalStorage(id, workName, activityStatus) {
  let lists = JSON.parse(localStorage.getItem('lists')) || {};
  lists[id] = { workName, activityStatus };
  localStorage.setItem('lists', JSON.stringify(lists));
}


// Load tasks from localStorage on page load
window.onload = function() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  tasks.forEach(item => {
    let timeSlot = findTimeSlot(item.time);
    if (timeSlot) {
      let taskBox = document.createElement('div');
      taskBox.className = "workName";
      
      taskBox.innerHTML = `
        <div class="taskDiv">
          <b>${sanitizeInput(item.task)}</b>
          <label>${sanitizeInput(item.time)}</label>
        </div>
      `;
      
      timeSlot.appendChild(taskBox); 
      loadLists()
      updateTaskCount();
    }
  });
}


function addTask() {
  let task = document.getElementById('todoInput').value;
  let time = document.getElementById('timeInput').value;

  if (task !== "" && time !== "") {
    // Find the correct time slot based on the input time
    let timeSlot = findTimeSlot(time);

    if (timeSlot) {
      // Create task box
      let taskBox = document.createElement('div');
      taskBox.className = "workName"
      
      // Use innerHTML with template literal to add task and time
      taskBox.innerHTML = `
       <div class="taskDiv">
            <b>${sanitizeInput(task)}</b>
            <label>${sanitizeInput(time)}</label>
       </div>
      `;

      // Append taskBox to the correct time slot
      timeSlot.appendChild(taskBox);

      // Save task to localStorage
      saveTaskToLocalStorage(task, time);

      // Clear input fields
      document.getElementById('todoInput').value = "";
      document.getElementById('timeInput').value = "";
    } else {
      alert("Please enter a valid time.");
    }
  } else {
    alert("Please enter both task and time.");
  }
}


function updateTaskCount() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  let taskCount = tasks.length;

  // If task count is less than 10, add leading zero
  let formattedCount = taskCount < 10 ? '0' + taskCount : taskCount;

  // Display the task count
  document.getElementById('taskCount').innerText = `${formattedCount} task today`;
}


function saveTaskToLocalStorage(task, time) {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ task, time });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function sanitizeInput(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sanitizeInput(input) {
  let element = document.createElement('div');
  element.innerText = input;
  return element.innerHTML;
}

function findTimeSlot(time) {
  // For example, find a div by time or return null if not found
  return document.getElementById('time-slot-' + time) || null;
}

function getRandomColor() {
  const colors = ['#FDE68A', '#A7F3D0', '#FECACA', '#BFDBFE', '#C4B5FD'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function findTimeSlot(inputTime) {
  // Normalize the time (convert to lower case and remove spaces)
  let normalizedTime = inputTime.trim().toLowerCase().split('-')[0].trim();

  // Find the corresponding time element using data-time attribute
  let timeElements = document.querySelectorAll('#time div');
  for (let timeElement of timeElements) {
      if (timeElement.getAttribute('data-time') === normalizedTime) {
          return timeElement; // Return the time element
      }
  }
  return null; // Return null if no matching time is found
}


  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const month = monthNames[today.getMonth()];
  const date = today.getDate();
  document.getElementById("currentDate").textContent = `${month}, ${date}`;




    let dateContainer = document.getElementById('date');
    let selectedButton = null; // Track the currently selected button
  
    for (let i = 0; i < 7; i++) {
      let button = document.createElement('button');
      
      let h1 = document.createElement('h1');
      h1.innerText = today.getDate(); // Get current day
  
      let label = document.createElement('label');
      label.innerText = today.toLocaleDateString('en-US', { weekday: 'short' }); // Get day (e.g., Sat)
  
      button.appendChild(h1);
      button.appendChild(label);
  
      button.className = "button"
  
      // Apply special styling for today
      if (i === 0) {
        button.className = "cur"
      }
  

  
      dateContainer.appendChild(button);
  
      // Move to the next day
      today.setDate(today.getDate() + 1);
    }






 





let selectedListId = null;

function loadLists() {
  let lists = JSON.parse(localStorage.getItem('lists')) || {};
  const listBox = document.getElementById("listBox");

  // Clear existing content
  listBox.innerHTML = '';

  for (const [id, { workName, activityStatus }] of Object.entries(lists)) {
    const div = document.createElement("div");
    div.className = "list";
    div.id = id; // Assign id for click event handling

    div.innerHTML = `
      <p class="time">${activityStatus}</p>
      <div class="icon">🎨</div>
      <h2>${workName}</h2>
      <label>${(lists[id].tasks || []).length} total tasks</label>
    `;

    // Add click event listener
    div.addEventListener('click', function() {
      selectList(id);
    });

    listBox.appendChild(div);
  }
}

function selectList(id) {
  selectedListId = id; // Set the selected list ID globally
  addListWork(id); // Load tasks and details for the selected list
}

function addListWork(id) {
  let lists = JSON.parse(localStorage.getItem('lists')) || {};

  if (lists[id]) {
    const { workName, activityStatus, taskTime, tasks = [] } = lists[id];

    const addWorkInList = document.getElementById("addWorkInList");

    if (addWorkInList) {
      document.getElementById("taskName").value = workName || '';
      document.getElementById("taskStatus").value = activityStatus || '';
      document.getElementById("taskTime").value = taskTime || '';

      // Clear the previous tasks from pendBox
      const pendBox = document.getElementById("pendBox");
      pendBox.innerHTML = '';

      // Load existing tasks
      tasks.forEach(task => {
        const taskBox = document.createElement('div');
        taskBox.classList.add('pendBox');

        const taskTitle = document.createElement('h1');
        taskTitle.textContent = task.taskName;

        const taskDescription = document.createElement('p');
        taskDescription.textContent = task.taskStatus;

        const taskTimeLabel = document.createElement('label');
        taskTimeLabel.innerHTML = `<i class="ri-alarm-line"></i> ${task.taskTime}`;

        taskBox.appendChild(taskTitle);
        taskBox.appendChild(taskDescription);
        taskBox.appendChild(taskTimeLabel);

        pendBox.appendChild(taskBox);
      });

      addWorkInList.style.display = "block";
      document.getElementById("MainPage").style.display = "none";
    }
  } else {
    console.error(`No list found with ID: ${id}`);
  }
}

function addNewTask() {
  const taskName = document.getElementById('taskName').value.trim();
  const taskStatus = document.getElementById('taskStatus').value.trim();
  const taskTime = document.getElementById('taskTime').value.trim();

  // Validate inputs
  if (taskName === '' || taskStatus === '' || taskTime === '') {
    alert('Please fill out all fields');
    return;
  }

  if (!selectedListId) {
    alert('No list selected');
    return;
  }

  // Get lists from local storage or initialize empty object
  let lists = JSON.parse(localStorage.getItem('lists')) || {};

  if (lists[selectedListId]) {
    const { tasks = [] } = lists[selectedListId];

    // Add new task
    tasks.push({ taskName, taskStatus, taskTime });
    lists[selectedListId].tasks = tasks;

    // Update local storage
    localStorage.setItem('lists', JSON.stringify(lists));

    // Update the pendBox with new task
    const pendBox = document.getElementById('pendBox');
    if (pendBox) {
      const taskBox = document.createElement('div');
      taskBox.classList.add('pendBox');

      const taskTitle = document.createElement('h1');
      taskTitle.textContent = taskName;

      const taskDescription = document.createElement('p');
      taskDescription.textContent = taskStatus;

      const taskTimeLabel = document.createElement('label');
      taskTimeLabel.innerHTML = `<i class="ri-alarm-line"></i> ${taskTime}`;

      taskBox.appendChild(taskTitle);
      taskBox.appendChild(taskDescription);
      taskBox.appendChild(taskTimeLabel);

      pendBox.appendChild(taskBox);

      // Clear input fields
      document.getElementById('taskName').value = '';
      document.getElementById('taskStatus').value = '';
      document.getElementById('taskTime').value = '';
    } else {
      console.error('pendBox element not found');
    }
  } else {
    alert('No such list found');
  }
}

// Add event listener to the Add Task button
const addTaskBtn = document.getElementById('addTaskBtn');
if (addTaskBtn) {
  addTaskBtn.onclick = addNewTask;
}

// Initial call to load the lists when the page loads
window.onload = loadLists;







// Close button functionality
document.getElementById("cutListBox")?.addEventListener('click', function() {
  const addWorkInList = document.getElementById("addWorkInList");
  if (addWorkInList) {
    addWorkInList.style.display = "none";
  }

  const mainPage = document.getElementById("MainPage");
  if (mainPage) {
    mainPage.style.display = "block";
  }
});

// Load lists on page load
document.addEventListener('DOMContentLoaded', loadLists);




// Example of how you might set up a list item click
document.getElementById("list1").addEventListener('click', function() {
  addListWork('list1');
});
document.getElementById("list2").addEventListener('click', function() {
  addListWork('list2');
});

// Close button functionality
document.getElementById("cutListBox").addEventListener('click', function() {
  document.getElementById("addWorkInList").style.display = "none";
  document.getElementById("MainPage").style.display = "block";
});




document.getElementById("cutListBox").onclick = function(){
  document.getElementById("addWorkInList").style.display = "none"
  document.getElementById("MainPage").style.display = "block"
}




