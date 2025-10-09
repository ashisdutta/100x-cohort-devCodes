
const anchorTagObject = {
    type: "a",
    props:{
        href: "https://www.google.com/maps",
        children: "Click Me"
    }
}

function CreateElement(obj){
    const {type, props} = obj;
    const el = document.createElement(type);

    for(let key in props){
        if(key === "children") continue;
        el.setAttribute(key, props[key])
    }
    el.textContent = props.children;

    return el;
}

const anchorElement = CreateElement(anchorTagObject);

const rootElement = document.getElementById("root");
rootElement.appendChild(anchorElement)


