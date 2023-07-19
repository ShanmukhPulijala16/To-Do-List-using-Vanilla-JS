const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Creating a function that does the task of creating an 'li' and 'span' elements
function addTask(){
    if(inputBox.value === ""){
        alert("You have to write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        li.appendChild(span);
    }
    inputBox.value = "";
    // Updating and saving the data in browser
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        // Updating and saving the data in browser
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        // Updating and saving the data in browser
        saveData();
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.parentElement.remove();
        // Updating and saving the data in browser
        saveData();
    }
}, false);

// Function to save data in the browser
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Functon to get data in the browser
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

getData();