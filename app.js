// neeed to target list element and create a function which allows us to take a user input and append it to the list
//create a button which allows us to onClick append the child LI to the UL 
// need to target elementd within the HTML and store them as variabled to manipulate them later on 


// below targets the input element and the list element allowing us to use the input field and target the UL 
const taskInput = document.getElementById("taskInput")
const taskList = document.getElementById("taskList")

// add an event listener to the input field, that on pressing the enter key and having anything other than a blank input field will append the text to the list 

taskInput.addEventListener ("keydown", function(e)
// if the event (e) is equal to the key enterr and the input field does not have a value of an empty string then trim the whitespace at either side then continue the function
{if (e.key=== "Enter" && taskInput.value.trim() !== "") {
    // this will prevent the code from refreshing the page on event trigger and clearing the list 
    e.preventDefault ()
//add the input value to the task list and trim the whitespace at the start and end of the input
addTask(taskInput.value.trim())
// Reset the task input value to nothing once complete.
taskInput.value = "" }
})

function addTask(taskText) {
    const li = document.createElement("li")
    li.innerHTML = `
    <span> ${taskText} </span>
    <button class= "deleteBtn"> Delete </button>
    `
    taskList.appendChild(li)

    li.querySelector (".deleteBtn").addEventListener("click" , function() {
        taskList.removeChild(li)
    })
} 