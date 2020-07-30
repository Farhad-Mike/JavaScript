'use strict';


let a = new Uint8Array([1, 2, 3, 4]);
let b = new Uint8Array([5, 6, 7, 8]);

let c = new Uint8Array(8);

c.set(a, 0);
c.set(b, 4);

console.log(c)
