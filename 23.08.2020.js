// console.log(12)


// // Написать ф-цию для проверки правильного вложения скобок.
// // Скобки могут быть только четырёх видов ()[]<>{}



// function test(str) {

//     const dict = [
//         ['[',']'],
//         ['{','}'],
//         ['(',')'],
//         ['<','>'],
//     ]

//     const res = [...str].every(bracket => {
//         return dict.every(d=>  {
//             const openSymbol = d[0]
//             const closeSymbol = d[1]
//             const state = d[2]

//             const [open] = dict.find(([open, ,state]) => open===openSymbol && state) || []
            
//             if (openSymbol === bracket) {
//                 d[2] = true
//                 return true
//             } else if  (closeSymbol === bracket) {
//                 delete d[2]
//                 return true
//             }
//                 return false
//         })
//     })

//     console.log(res)
//     return res
// }


// const test = (str) => {
//   const start = ['[', '(', '<', '{'];
//   const end = [']', ')', '>', '}'];
//   const arr = [];
//   for (let alphabet of str) {
//     if (start.includes(alphabet)) {
//       arr.push(alphabet);
//     } else {
//       if (alphabet !== end[start.indexOf(arr.pop())]) {
//         return false;
//       }
//     }
//   }
//   return !arr.length;
// };

// console.log(test('[]()<>')); // true
// console.log(test('[')); // false
// console.log(test('[({})](')); // false
// console.log(test('[]()<)')); // false
// console.log(test('([])<>')); // true
// console.log(test('([]<)>')); // false
// console.log(test('([])<>')); // tru

// function test(str) {
//     const strArr = str.split('');
//     let stack = [];
//     const check = {
//         ']': '[',
//         ')': '(',
//         '>': '<'
//     };

//     strArr.forEach(function (bracket) {
//             //1  0 === 0
//         if ((stack.length === 0) || !check[bracket]) {
//             stack.push(bracket);
//         } else {
//             const lastElmInStack = stack[stack.length - 1];
//             if (lastElmInStack === check[bracket]) {
//                 stack.pop();
//             }
//         }
//     });

//     return !stack.length;
// }

// const a = {a: 1};
// const b = Object.create(a); // b = {__proto__: {a: 1}}
// // b = Object.create({ a: 1 })
// console.log(b.a); // Вывод: 1 Правильно :D

// delete b.a; // undefined

// console.log(b.a); // Вывод: 1 Правильно :D

// delete a.a; // b = {__proto__: {}}

// console.log(b.a); // Вывод: 1 ( Неправильно 
// // Да, undefined


// test('[]()<>') // true
// // test('[]()<)') // false
// // test('([])<>') // true
// // test('([]<)>') // false


// function test(str) {

//     const dict = [
//         ['[', ']'],
//         ['{', '}'],
//         ['(', ')'],
//         ['<', '>'],
//     ]

// test('[]()<>') // true
// test('[]()<)') // false
// test('([])<>') // true
// test('([]<)>') // false

// function test(str) {

//     const dict = [
//         ['[',']'],
//         ['{','}'],
//         ['(',')'],
//         ['<','>'],
//     ]

//  	const state = [...str].reduce((acc,el) => {
// 		if(!acc) return false
// 		if(!acc.length) {
// 			acc.push(el)
// 			return acc
// 		}
// 		const [opened] = dict.find(([opened])=>opened===el) || []
	 	
// 		if (opened) return [...acc, el]

// 		const last = acc.pop()

// 		const [lastDictOpened] = dict.find(([,closed])=>closed===el) || []
	
// 		if(last === lastDictOpened) {
// 			return acc
// 		}
		
// 	},[])
// 	console.log(!!state)
// }



// Написать задачу, которая находит все аннограммы
const array = [
    "вертикаль",
    "кильватер",
    "апельсин",
    "спаниель",
    "австралопитек",
    "ватерполистка",
    "кластер",
    "сталкер",
    "стрелка",
    "корабль"
]

// Результат:
const x = [
    ["вертикаль", "кильватер"],
    ["апельсин", "спаниель"],
    ["австралопитек", "ватерполистка"],
    ["кластер", "сталкер", "стрелка"],
	["корабль"]
]
annogramm2(array)
function annogramm2(arr) {
    const result  = {}
    arr.forEach((item,i) => {
        const itemSorted = item.split('').sort().join('')
        return result[itemSorted] = result[itemSorted] ? [...result[itemSorted], item] : [item]
    })
    console.log('МОЕ',Object.values(result))
}

// console.log(annogramm(array))
// function annogramm(arr) {
//   let res = [];

//   const sort = {};
//   arr.forEach(element => {
//     if(!sort[element.length]) {
//       sort[element.length] = [];
//     }
//     sort[element.length].push(element);
//   });

//   const toNormal = (str) => [...str].sort().join('');

//   const assert = (f, s) => toNormal(f) === toNormal(s);
  
//   const assert_arr = (arr) => {
//     arr = [...arr];
//     const res = [];

//     arr.forEach((str, i) => {
//       res[i] = [];
//       arr.forEach((str2, i2) => {
//         if(assert(str, str2)) {
//           res[i].push(str2);
//           delete arr[i2];
//         }
//       })
//     })

//     return res;
//   }

//   for(let len in sort) {
//     const asserted_arr = assert_arr(sort[len]).filter(el => el) || [];
//     if(asserted_arr) {
//       res = [...res, ...asserted_arr];
//     }
//   }

//   return res;
// }