console.log('Your code goes here...')

function add(n1: number, n2: number) {
    if(typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input!')
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);

console.log(result)



type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(
    input1: Combinable,
    input2: Combinable,
) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = +input1 + +input2
    } else {
        result = input1.toString() + input2.toString()
    }
    return result
}


// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//     const result = n1 + n2;
//     cb(result);
// }

// addAndHandle(10, 20, (result: number) => { 
//     console.log(result)
// })

// const add = (...numbers, number[]) => {

// };

// const addedNumbers = add(5, 10, 2, 3.7);
