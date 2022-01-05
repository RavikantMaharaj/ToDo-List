let addBtn = document.getElementById('add_btn');

addBtn.addEventListener('click',addNotes);

let ParentList = document.getElementById('parentList');

// function to add notes

function addNotes(e){
    if(ParentList.children[0].className == 'list-group-item'){
        ParentList.children[0].remove();
    }
     
    // storing the note to add
    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    
    let currentNote = currentInput.value;
    
    //creating new element 
    let newLi = document.createElement('li');
    newLi.className = "list-group-item d-flex justify-content-between";

    newLi.innerHTML = ` <h5 class="flex-grow-1" >${currentNote}</h5>
    <button class="btn btn-warning mx-2" onclick="EditNote(this)">Edit</button>
    <button class="btn btn-secondary mx-2" onclick="strikeNote(this)">Mark as complete</button>
    <button class="btn btn-danger " onclick="DeleteNote(this)">Delete</button>
    `
    ParentList.append(newLi);
}

// function to delete note

function DeleteNote(currElement){
          currElement.parentElement.remove();

          // if there is no any note
          if(ParentList.children.length <= 0){
            let EmptyMsg = document.createElement('h5');    
              EmptyMsg.textContent = 'Hurray! you don\'t have any task to do today!!!';
              EmptyMsg.classList.add('list-group-item');
              EmptyMsg.style.backgroundColor = 'cyan';
              EmptyMsg.style.textAlign = 'center';
              ParentList.appendChild(EmptyMsg);
          }
          
}

// function to edit the note

function EditNote(currElement){
  
     // if it is save we will edit
    if(currElement.textContent == 'save'){
        currElement.textContent = 'Edit';
        let currNote = currElement.previousElementSibling.value;
        let currHeading = document.createElement('h5');
        currHeading.className = 'flex-grow-1';
        currHeading.textContent = currNote;
        currElement.parentElement.replaceChild(currHeading, currElement.previousElementSibling);    
    }
    

    // if it is edit we will make it save
    else {
    currElement.textContent = 'save';
    let currNote = currElement.previousElementSibling.textContent;
    let currInput = document.createElement('input');
    currInput.type = 'text';
    currInput.placeholder = 'Add Task';
    currInput.className = 'form-control';
    currInput.value = currNote;
    currElement.parentElement.replaceChild(currInput, currElement.previousElementSibling);
    }
}

// function to strike the note

function strikeNote(curEle){

      curEle.parentElement.children[0].classList.add('checked');

}