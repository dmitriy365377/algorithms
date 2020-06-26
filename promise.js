// function sum(a, b, cb) {
//   setTimeout(() => {
//     cb(a + b);
//   }, Math.random() * 2000);
// }

// function sumPromise(a, b) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, Math.random() * 2000);
//   });
// }

// const p = sumPromise(5, 7);

// p.then(console.log);

// p.then(
//   value => {
//     console.log('ok', value * 2);
//   },
//   reason => {
//     console.log('err', reason);
//   },
// )

const p1 = new Promise(r => setTimeout(r, Math.random() * 2000, 6));
const p2 = new Promise(r => setTimeout(r, Math.random() * 2000, [1,2]));
const p3 = new Promise(r => setTimeout(r, Math.random() * 2000, 'hello'));
const p4 = new Promise(r => setTimeout(r, Math.random() * 2000, {z: 1}));
const p5 = new Promise(r => setTimeout(r, Math.random() * 2000, () => {}));

// p1.then(x => {

// })

function all(promises) {
   return new Promise((resolve)=> {
      const arr = []
      let count = 0
      for(let i = 0; i < promises.length; i++) {
        promises[i].then(
            value => {
                arr[i] = value
                count++;
                if (count === promises.length) {
                    resolve(arr)
                }
            }
        )
      }
   })
}

// Promise.all 
// Promise.race 
// Promise.allSettled 
// Promise.any 

all([p1, p2, p3, p4, p5]).then(
    value => {
        console.log(value)
    }
) // [1, 2, 3, 4, 5]


// p1.then(console.log);
// p2.then(console.log);
// p3.then(console.log);
// p4.then(console.log);
// p5.then(console.log);

