function insertItem(){
    var container = document.getElementById("container");
    var item = document.createElement("li");
    item.textContent = "hello";
    container.appendChild(item);
}

function removeItem(){
    var container = document.getElementById("container");
    var item = container.lastChild;
    if (item){
        container.removeChild(item);
    }
}
