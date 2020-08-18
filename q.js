// var i;
const arr = [10, 12, 15, 21];


// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function(i) {
//     return function() {
//       console.log('The index of this number is: ' + i);
//     };
//   }(i), 1000)
// }


function f1(a, b, c) {
    console.log(this, a, b, c)

}

// this let = { 


// }

Array.prototype.includes = function (x) {
    return this.indexOf(x) !== -1;
}

// 3 ** 5 → Math.pow(3, 5)


Function.prototype.call2 = function (ctx, ...args) {
    const s = Symbol();
    ctx[s] = this;
    const r = ctx[s](...args);
    delete ctx[s];
    return r;
}

f1.call2(programmer, 3, 7, 10);




// for (var i = 0; i < arr.length; i++) {
//     setTimeout(function (i) {
//         console.log('The index of this number is: ' + i);
//     }.bind(null, i), 1000)
// }


// console.log(i);
