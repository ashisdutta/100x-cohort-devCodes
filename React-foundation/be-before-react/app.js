let globalId = 0;

function addTodo(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const contDiv = document.getElementById("container");
    contDiv.appendChild(createChild(title, description, globalId++));
}

function createChild(title, description, id){
    const outerDiv = document.createElement("div");
    const titleDiv = document.createElement("div");
    const descriptionDiv = document.createElement("div");
    const newButton = document.createElement("button");

    titleDiv.innerHTML = title;
    descriptionDiv.innerHTML = description;
    newButton.innerHTML = "mark as done";

    newButton.setAttribute("onclick", `Done(${id})`);

    outerDiv.appendChild(titleDiv);
    outerDiv.appendChild(descriptionDiv);
    outerDiv.appendChild(newButton);
    outerDiv.setAttribute("id", id);
    return outerDiv;
}

function Done(id){
    const mainDiv = document.getElementById(id);
    mainDiv.querySelector("button").innerHTML = "Done";
}


function updateDomAccToState(state){
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for(let i=0; i<state.length; i++){
        parent.appendChild(createChild(state[i].title, state[i].description, state[i].id));
    }
    
}

updateDomAccToState([{
    title: "job1",
    description: "software engineer",
    id: 1
}, {
    title: "job2",
    description: "software engineer2",
    id: 2
}])



////////    i think problem with some the api endpoint
// window.setInterval(async function () {
//     try{
//         const res = await fetch("https://sum-server.100xdevs.com/todos")
//         const json = await res.json();
//         updateDomAccToState(json.todos)
//     }
//     catch(err){
//         console.error("getting error", err)
//     }
// }, 5000)

