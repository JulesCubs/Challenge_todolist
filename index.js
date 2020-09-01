const addB = document.getElementById('add_b');
const lista = document.getElementById('lista');
const container = document.getElementById('container');
const del = document.getElementById('del');
//console.log(del);
let data = document.getElementById('data');
let j = 0;
let lista1;

function agregarElemento () {

    var newDiv = document.createElement("div");
    var newInput = document.createElement("input");
    var newP = document.createElement("p");
    var newButton = document.createElement("button");
    
    newDiv.className = "container__list";
    newDiv.id = "lista";
    newInput.className = "container__list--check";
    newInput.type = "checkbox";
    newP.className = "container__list--toDo";
    newP.id = "data";
    newButton.className = "container__list--del";
    newButton.className += " icon-bin2";
    newButton.id = "del";
    
    newDiv.appendChild(newInput);
    newDiv.appendChild(newP);
    newDiv.appendChild(newButton);
    container.appendChild(newDiv);
    
    tarea = localStorage.getItem(j);
    newP.innerHTML = tarea;
    
    newDiv.style.display = 'flex';
    lista1 = newDiv;
}

addB.addEventListener('click', (event) => {
    let toDo = document.getElementById('textDo').value;
    //console.log(toDo);
    localStorage.setItem(j, toDo);
    document.getElementById('textDo').value = "";
    //console.log(localStorage);
    agregarElemento ();
    j++;
});


del.addEventListener('click', (ev) => {
    console.log(del);
    lista1.style.display = 'none';
});