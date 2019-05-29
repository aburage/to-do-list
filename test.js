//  check todo
const list = document.getElementById('todo');
list.addEventListener('click', function(event) {
    if (event.tagName === 'P') {
        event.classList.toggle('checked');
    }
}, false);

//  add todo
function newElement() {
    const newLi = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);

    if (inputValue != '') {
        document.getElementById("myList").appendChild(newLi);
        newLi.id = "todo";
        const newP = document.createElement("p");
        newP.id = "name";
        const span = document.createElement("SPAN");
        span.className = "closeButton";
        newLi.appendChild(newP);
        newP.appendChild(text);
        document.getElementById("myInput").value = "";

        const txt = document.createTextNode("\u00D7");
        span.appendChild(txt);
        newLi.appendChild(span);
    }
}

//  delete todo
const close = document.getElementById('todo');
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        const lists = document.getElementById('todo');
        const del = lists[i];
        lists.parentNode.removeChild(lists[i]);
    }
}
