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

//creeate a function the created a new list item and appends it to the list 
function addTask(taskText) {
    //create a variabnle which adds a new item to the list with the text inputed as taskText
    const li = document.createElement("li")
    // li.innerHTML targets the li element and allows the user to input text to that element and created a button labeled delete alongside each element. 
    li.innerHTML = `
    <span> ${taskText} </span>
    <input class = "chkBox"type="checkbox">  </input>
    <button class= "deleteBtn"> Delete </button>
    `
    //adds the item to the list as a child of the taskList class  element 
    taskList.appendChild(li)
// selects the deletebtn class created above and adds a click event listener that removed the child li item when clicked. 
    li.querySelector (".deleteBtn").addEventListener("click" , function() {
        taskList.removeChild(li)
    })
    // sets a var called checkbox, selects the input type checkbox and then adds an event listener which on click runs a function which toggles the class of the element
    const checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("click", function() {
        // Toggle the 'completed' class on the list item. The classList lets us change or add a class to the list element whilst the toggle allows us to to toggle this new class of completed
        //off and on. The completed class is then placed into the CSS which will toggle a line through the text once the checkbox is clicked and the class is given to that list item  
        li.classList.toggle("completed");
    });
} 

// TO DO  - 1.Allow a tick box for completion of a task which will strike out a task when clicked 