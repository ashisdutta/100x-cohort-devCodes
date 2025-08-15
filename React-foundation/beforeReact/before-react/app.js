let globalId = 0
function addtodo(){
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const parent = document.getElementById("container");
    parent.appendChild(createChild(title, description, globalId++));
}

function createChild(title, description, id){
    const parentDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const markButton = document.createElement("button");

    titleDiv.innerHTML = title;
    descriptionDiv.innerHTML = description;
    markButton.innerHTML = "Mark as Done";

    markButton.setAttribute("onclick", `Done(${id})`);

    parentDiv.appendChild(titleDiv);
    parentDiv.appendChild(descriptionDiv);
    parentDiv.appendChild(markButton);
    parentDiv.setAttribute("id", id);

    return parentDiv;
}

function Done(id){
    const markAsButton = document.getElementById(id);
    markAsButton.querySelector("button").innerHTML = "Done";
    
}

function updateDomAccToState(state){
    const parent = document.getElementById("container");
    parent.innerHTML = "";

    for(let i=0; i<state.length; i++){
        const child = createChild(state[i].title, state[i].description, state[i].id);
        parent.appendChild(child);
    }
}

updateDomAccToState([{
    title: "go to gym",
    description: "go to gym from 5-7",
    id: 1
}, {
    title: "go to school",
    description: "go to school from 9-6",
    id: 2
}])