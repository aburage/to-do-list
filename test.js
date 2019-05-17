const list = document.querySelector("ul,#myList");
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    const newLi = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const text = document.createTextNode(inputValue);
    if (inputValue != '') {
        newLi.appendChild(text);
        document.getElementById("myList").appendChild(newLi);
        document.getElementById("myInput").value = "";

        const span = document.createElement("SPAN");
        span.className = "closeButton";
        const txt = document.createTextNode("\u00D7");
        span.appendChild(txt);
        newLi.appendChild(span);
    }
}
