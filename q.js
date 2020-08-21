// // // var i;
// // const arr = [10, 12, 15, 21];


// // // for (var i = 0; i < arr.length; i++) {
// // //   setTimeout(function(i) {
// // //     return function() {
// // //       console.log('The index of this number is: ' + i);
// // //     };
// // //   }(i), 1000)
// // // }


// // function f1(a, b, c) {
// //     console.log(this, a, b, c)

// // }

// // // this let = { 


// // // }

// // Array.prototype.includes = function (x) {
// //     return this.indexOf(x) !== -1;
// // }

// // // 3 ** 5 → Math.pow(3, 5)


// // Function.prototype.call2 = function (ctx, ...args) {
// //     const s = Symbol();
// //     ctx[s] = this;
// //     const r = ctx[s](...args);
// //     delete ctx[s];
// //     return r;
// // }

// // f1.call2(programmer, 3, 7, 10);




// // // for (var i = 0; i < arr.length; i++) {
// // //     setTimeout(function (i) {
// // //         console.log('The index of this number is: ' + i);
// // //     }.bind(null, i), 1000)
// // // }


// // // console.log(i);




// // function asyncOne(resolve) {
// //     setTimeout(function () {
// //         resolve('Result 1');
// //     }, 10);
// // }

// // function asyncTwo(resolve) {
// //     setTimeout(function () {
// //         resolve('Result 2');
// //     }, 5);
// // }

// // // Write the implementation of this function, please
// // function parallel(asyncFunctions, readyCallback) {
    
// // }

// // parallel([asyncOne, asyncTwo], function (results) {
// //     console.log(results) // ['Result 1', 'Result 2']
// // });


// // 3456
// //   43
// // 3499

// const term1 = 3456
// const term2 = 43

// columnAddition(term1,term2)

// function columnAddition(term1, term2) {
//     const arrayOfResult = []
//     const arrayOfNumbers1 = String(term1).split('')
//     let arrayOfNumbers2 = String(term2).split('')

//     if (arrayOfNumbers1.length !== arrayOfNumbers2.length) {
//         let arrayOfZero = []
//         for (let i = 0; i < (arrayOfNumbers1.length - arrayOfNumbers2.length); i++) {
//             arrayOfZero.push(i * 0)
//         }
//         arrayOfNumbers2 = [...arrayOfZero, ...arrayOfNumbers2]
//     }

//     for (let i = 0; i < arrayOfNumbers1.length; i++) {
//         arrayOfResult.push(Number(arrayOfNumbers1[i]) + Number(arrayOfNumbers2[i]));
//     }
//     return Number(arrayOfResult.join(''))
// }


// [3,4,5,6]
// [0,0,4,3]
// [3,4,9,9]


