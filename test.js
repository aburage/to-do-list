//  check todo
const list = document.getElementsByClassName('name');
for(let i = 0; i < list.length; i++) {
     list[i].addEventListener('click', function (event) {
         event.target.classList.toggle('checked');
     }, false);
 }

//  add todo
function newElement() {
    const newLi = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);

    if (inputValue != '') {
        document.getElementById("myList").appendChild(newLi);
        newLi.className = "todo";
        const newP = document.createElement("p");
        newP.className = "name";
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
const close = document.querySelectorAll('ul li.todo span.closeButton');
const lists = document.querySelectorAll('ul li.todo');
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        console.log(i)
        close[i].parentNode.remove(lists[i]);
    }
}