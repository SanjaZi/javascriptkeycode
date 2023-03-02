const firstContainer = document.getElementById('firstContainer');
const secondContainer= document.querySelectorAll(".secondContainer");
const eventKeyChangable = document.getElementById('eventKeyChangable');
const eventKeyChangable1 = document.getElementById('eventKeyChangable1');
const eventKeyChangable2 = document.getElementById('eventKeyChangable2');


document.onkeypress = function(evt) {
    firstContainer.classList.add("hidden");

    for (let index = 0; index < secondContainer.length; index++) {
        const element = secondContainer[index];
        element.classList.remove("hidden");
    }
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    let value= event.which;
    let key = event.code;
    eventKeyChangable.innerHTML = charStr;
    eventKeyChangable1.innerHTML = value;
    eventKeyChangable2.innerHTML = key;
};






