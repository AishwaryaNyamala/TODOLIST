// Selecting elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskText = taskInput.value.trim(); // Get input value & remove extra spaces

    if (taskText === "") {
        alert("Please enter a task!"); // Prevent empty tasks
        return;
    }

    // Create list item (li)
    const li = document.createElement("li");
    li.innerHTML = `
        ${taskText} 
        <button class="delete-btn">X</button>
    `;
    li.style.color = "black";
    // Append the task to the list
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = "";

    // Add event listener to delete button
    li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
    });
}

// Add event listener for button click
addTaskBtn.addEventListener("click", addTask);

// Allow "Enter" key to add tasks
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
