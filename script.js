'use strict';


let elems = document.getElementsByClassName('events');
let elem = elems[1];

elem.addEventListener('click', function(e) {
    e.stopPropagation();
})
for (let i of elems) {
    i.addEventListener('click', function(e) {
        alert(e.currentTarget);
        console.log(e.target)
    })

}


