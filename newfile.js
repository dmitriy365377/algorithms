// // const str = "The quick brown fox jumps over the lazy dog"
// // const k = 39
// // const newStr = str.slice(0,39)

// const { resolve } = require("path");
// const { readFile } = require("fs");


// // const str2 = "WRWRWRWR"
// // console.log(foo(str2))
// // function foo(str2) { 
// //     let newStr = str2.split('')
// //     const result = {};
// //     newStr.forEach(function (a) {
// //         if (result[a] != undefined)
// //             ++result[a];
// //         else
// //             result[a] = 1;
// //     });
// //     return result
// // }

// const a = {
//     b: 'b',
//     c: function() {
//         return () => console.log(this)
//     }
// }

// const f = a.c();

// // f(); // this функции c

// f.call({q: 'q'});

// f.bind({'w': 'w'})();

// // const b = {
// //     z: a.c,
// // };

// // const g = b.z();

// // g();



// // function A() {
// //     // this = { __proto__: A.prototype }
// //     this.a = 4;
// //     // return this
// // }

// // const o = new Object()
// // const o = {} //  { __proto__: Object.prototype }

// // A() // undefined

// function Names(name, age) {
//     // this.__proto__ = Names.prototype;
//     this.name = name
//     this.age = age
//     // return this;
// }

// const name = {
//     name: 'Dima'
// }

// const name = {
//     name: "Max"
// }

// function Names(name) {
//     return {
//         name,
//         age,
//         __proto__: Object.prototype,
//     }
// }

// const Dima = new Names('Dima')
// const Max = new Names('Max')



// function A() {
//     console.log('>>', new.target)
//     if (new.target === undefined) {
//         return new A()
//     }
// }

// const a2 = A() 

// // function A(x) {
// //     if (new.target) {
// //         this.x = x;
// //     } else {
// //         return new A(x);
// //     }
// // }

// // const a1 = new A(5) // = { x: 5, __proto__: A.prototype }
// // const a2 = A(6) // = { x: 5, __proto__: A.prototype }

// // console.log(a1)
// // console.log(a2)

// // new Object() === {}


// function asyncOne (resolve) {
//   setTimeout(function () {
//     resolve('Result 1');
//   }, 10);
// }

// function asyncTwo (resolve) {
//   setTimeout(function () {
//     resolve('Result 2');
//   }, 5);
// }

// parallel([asyncOne, asyncTwo], function(results) {
//   console.log(results) // ['Result 1', 'Result 2']
// });

// // Write the implementation of this function, please
// function parallel (asyncFunctions, readyCallback) {
//     const arr = [];
//     let counter = 0;
//     asyncFunctions.forEach((func, i) => func((data) => {
//         arr[i] = data;
//         if (++counter === asyncFunctions.length) {
//             readyCallback(arr);
//         }
//     }))
// }

 
// Node.js program to demonstrate 
// the fs.readFile() method 

// Include fs module 
var fs = require('fs');
// const { resolve } = require('path');
// const { reject } = require('ramda');
// const { P } = require('Object/_api');


const cb = (result) => console.log('>>', result);

// fs.readFile('README.md', 'utf8', function (err, data) {
//     cb(data);
// });


function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, function (err, data) {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(data)
                }
            })
        })
    }
}

const promiseReadFile = promisify(fs.readFile);

promiseReadFile('README.md', 'utf8').then(data => cb(data));
promiseReadFile('README1.md', 'utf8').then(data => cb(data));
promiseReadFile('README.md2', 'utf8').catch(data => cb(data));

const fibGen = () => {
    let [a, b] = [0, 1];

    return () => {
        [a, b] = [b, a + b];
        return a;
    }
}

// https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md

const f1 = fibGen();

console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());
console.log(f1());

const f2 = fibGen();

console.log(f2());
console.log(f2());
console.log(f2());
