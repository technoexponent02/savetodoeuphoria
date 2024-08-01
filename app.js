document.addEventListener('DOMContentLoaded', function(){

const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const ulContent = document.getElementById('todo-list');


addButton.addEventListener('click', btnClick);


function btnClick(){

let todoInputValue = todoInput.value;
//alert("Hi "+todoInputValue);

let licontent = document.createElement('li');

licontent.innerHTML = todoInputValue+'<a class"delete_content"> Delete </a>';

ulContent.appendChild(licontent);

//todoInputValue ='';
todoInput.value ='';

licontent.addEventListener('click', deleteContent);

function deleteContent(event){

    const deletedata = event.target.parentElement;
    ulContent.removeChild(deletedata);

    //alert("hi");
}

    


}




});
