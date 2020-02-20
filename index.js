// console.log('hello');

// function rgb(r, g, b) {
// }

// console.log(rgb(255, 255, 255), 'FFFFFF');

// console.log(rgb(222,210,200),'FF','')

// function convertDecimalToBinary(number) {
//   return 
// }

// convertDecimalToBinary(5) === '';
// convertDecimalToBinary(8) === '';
// convertDecimalToBinary(15) === '';

// 0 1  2  3   4   5   6   7    8    9   10   11   12   13   14   15    16    17     18
// 0 1 10 11 100 101 110 111 1000 1001 1010 1011 1100 1101 1110 1111 10000 10001

// 72549 = 7×10^4 + 2×10^3 + 5×10^2 + 4×10^1 + 9×10^0
// 1101₂ = 1×2^3 + 1×2^2 + 0×2^1 + 1×2^0 = 8 + 4 + 1 = 13
// 110011101₂ = 1x2^8 + 1x2^7 + 0x2^6 + 0x2^5 + 1x2^4 + 1x2^3 + 1x2^2 + 0x2^1 + 1x2^0
// 110011101₂  = 256 + 128 +  16 + 8 + 4  + 1 = 413

// function convertBinaryTodecimal(bin) { // '1101' → 13
//   let power = 1;
//   let sum = 0;
//   for (let i = bin.length - 1; i >= 0; i--) {
//       sum += bin[i] * power;
//       power *= 2;
//   }
//   return sum;
// }

// console.log(convertBinaryTodecimal('110011101'));
// console.log(convertBinaryTodecimal('1101'));

// function b() {
//     let sumAll=0
//     let n = 100
//     for (let i = 0; i <= n; i++) {
//        sumAll += i;
//     }
//     return console.log(sumAll)
// }

// b()


// 60 / 10 = 6 км/ч
// 60 / 45 = 1.333 км/ч
// 60 / 50 = 1.2 км/ч

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.on('line', function (data) {
//   const [n, s, ...array] = data.split(' ').map(Number)

// });


// function findShift(n, distance, array) {
//   const timeToTarget = array.map(el => el * distance)
//   let shifts = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (timeToTarget[i] > timeToTarget[j] + j) {
//         shifts++
//       }
//     }
//     if (i === timeToTarget.length - 1) {
//       if (!(timeToTarget[timeToTarget.length - 1] + i>= timeToTarget[0])) {
//         shifts++;
//       }
//     }
//   }
//   return shifts
// }


// console.log(findShift(5, 10, [10, 3, 5, 8 , 1]))


// function weith(n) {
//   let sum = 0;
//   let max = 3.00;
//   let a = a[n];
//   for (let i = 0; i < n; i++) {
//     console.log(a[i])
//   }
//   so
// }

function even_or_odd(i) {
  if (i % 2) {
    return `Odd`
  } else {
    return `Even`
  }
}







function opposite(number) {
  return -number
}




function abbrevName(name) {
  const [firstName, LastName] = name.split(' ');
  console.log(firstName, LastName)
  return `${firstName[0]}.${LastName[0]}`.toUpperCase();
}





function century(year) {
  return Math.ceil(year / 100);
}



//console.log(century(1705))


// function solution(str) {
//   let newString = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }


function solution(str) {
  let newString = '';
  for (const letter of str) {
    newString = letter + newString;

  }
  return newString;
}


//console.log(solution('world'))



function maskify(cc) {
  let newString = '';
  for (let i = cc.length - 5; i >= 0; i--) {
    newString += '#'
  }
  return newString + cc.slice(-4)
}

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#');
}

//console.log(maskify("4556364607935616"))



function removeChar(str) {
  return str.substr(1, 6)
};


//console.log(removeChar('eloquent'))


function multiply(n, l) {
  return l.map(int => Math.round(n / (1 / int)));
}



//console.log(multiply(2, [1, 2, 3]))

function createPhoneNumber(numbers) {
  let pattern = '(000) 000-0000'
  let i = 0;
  return Array.from(pattern).map(int => int === 0 ? numbers[i++] : int).join('');
}


function args_count(...param) {
  return param.length
}

function args_count() {
  return arguments.length;
}


//const args_count = (...args) => args.length


// function isLeapYear(year) {
//   return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
// }

// const isLeapYear = year => !(year / 4 % 4);


// function countSheep(num) {
//   const sheep = "1 sheep... "
//   return countSheep = sheep.repeat(num)
// }


// function countSheep(num) {
//   let i = 1;
//   let res = '';
//   while (i <= num) {
//     res += `${i} sheep...`
//     i++;
//   }
//   return res;
// }

// console.log(countSheep(3))




// function validateEmail(email) {
//   var re = /[A-Za-z](\w|-|\.|_)+@[A-Za-z]+\.[A-Za-z]{1,3}/g;
//   return re.test(String(email).toLowerCase());
// }

// function positiveSum(arr) {
//   let positiveNum = arr.filter(number => number >= 0)
//   return positiveNum.reduce((acc,cur)=> acc + cur,0)
// }


// console.log(positiveSum([1,-2,3,4,5]))

// function findShort(s){
//   return s.split(' ').map(w => w.length).reduce((acc, int) => int.length < acc ? acc = el.length : acc, Infinity)
// }


// console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

// function filter_list(l) {
//    return l.filter(number => typeof(number) === 'number')
// }


// console.log(filter_list([1,2,'a','b']))


// function squareDigits(num) {
//   return +num.toString().split('').map(item => item ** 2).join('') // афк пару минут

// }


// console.log(squareDigits(9119))



// var capitals = function (word) {
// // 	return  word.split('').map((_, i) => i).filter(i => word[i] === word[i].toUpperCase())
// // }

// // console.log(capitals('CodEWaRs'))

// //.find((cur,i) => cur.toUpperCase() === i)



// // function array_diff(a, b) {
// //   return a.filter(number => !b.includes(number))
// // }



// //  array_diff([3,4], [3])

// // Number.prototype.add = function (x) {
// //   return this + x;
// // }



// // console.log(4..add(3) === 7)



// // function filterHomogenous(arrays) {
// //   return arrays.filter((array, index) => array.length && array.every(item => typeof item === typeof array[0]));
// // }

// // arrays[0]
// // console.log(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]]))





// // Setup
// var collection = {
//   2548: {
//     album: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: [
//       "Let It Rock",
//       "You Give Love a Bad Name"
//     ]
//   },
//   2468: {
//     album: "1999",
//     artist: "Prince",
//     tracks: [
//       "1999",
//       "Little Red Corvette"
//     ]
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [ ]
//   },
//   5439: {
//     album: "ABBA Gold"
//   }
// };


// // const id = 24
// // console.log(collection[2468].tracks[0])




// let log = function updateRecords(a, b, c) {
//   //  return collection[a].b[0].push(c) 
//   console.log(collection[a][b][0] = c)
// }

// log(...[2468, "tracks", "ABBA"]);
// // Alter values below to test your code



// function rowWeights(array) {
//   return array.map((newArray, index) => index % 2 ? newArray.reduce((sum, current) => sum + current) : newArray)
// }

// function rowWeights(array) {
//   return array.filter((newArray, index) => {
//     if (index % 2 == 0) {
//       return newArray
//     }
//   }).concat(newArray.filter((_, index) => index % 2 == 0));
// }


// function rowWeights(array) {
//   return array.filter((newArray, index) => {
//     if (index % 2 != 0) {
//       return newArray 
//     }
//   }).concat(array.filter((_, index) => index % 2 == 0))
// }


// function rowWeights(array) {
//   const even = array.filter((_, index) => index % 2 == 0)
//   const odd = array.filter((_, index) => index % 2 != 0)
//   const sum1 = even.reduce((acc, cur) => acc + cur, 0)
//   const sum2 = odd.reduce((acc, cur) => acc + cur, 0)
//   const arr = []
//   arr.push(sum1, sum2)
//   return arr
// }
// console.log(rowWeights([50, 60, 70, 80]))

// function scrollingText(text) {
//   const result = [text.toUpperCase()];
//   let text2 = text;
//   for (i = 0; i < text.length - 1; i++) {
//     text2 = text2.slice(1) + text2.slice(0, 1);
//     result.push(text2.toUpperCase());
//   }
//   return result
// }
// console.log(scrollingText("abc"))

// const plus = (a, b) => a + b;

// function zipWith(fn, a0, a1) {
//   const x = Math.min(a0.length, a1.length)
//   const res = [];
//   for (let i = 0; i < x; i++) {
//     res.push(fn(a0[i], a1[i]))
//   }
//   return res;
// }

// zipWith(plus, [0, 1, 2, 3, 4,], [6, 5, 4, 3, 2, 1]) 


// const reverseSeq = n => {
//   const  array = []
//   for(let i = n; i >  0 ; i--) {
//     array.push(i)
//   }
//   return array;
// };


// // console.log(reverseSeq(5))


// function arrayPlusArray(arr1, arr2) {
//   const x = arr1.concat(arr2)
//   return x.reduce((accum, cur) => accum + cur)
//   return arr1.reduce((acc, item, index) => acc + el + arr2[index], 0)
// }

// //Ты живой ? да я жив а ты &?
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]))



// function charCount(str) {
//   const result = {}
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]
//     console.log('char', char)
//     if (result[char] > 0) {
//       console.log('result[char]', result[char]++)
//       result[char]++
//     } else {
//       result[char] = 1
//     }
//   }
//   return result
// } 
// console.log(charCount('hello'))


// var points = {
//   HarryPotter: 500,
//   CedricDiggory: 750,
//   RonaldWeasley: 100,
//   HermioneGranger: 1270
// };

// var wizards = [{
//     name: 'Harry Potter',
//     house: 'Gryfindor'
//   },
//   {
//     name: 'Cedric Diggory',
//     house: 'Hufflepuff'
//   },
//   {
//     name: 'Tonks',
//     house: 'Hufflepuff'
//   },
//   {
//     name: 'Ronald Weasley',
//     house: 'Gryfindor'
//   },
//   {
//     name: 'Hermione Granger',
//     house: 'Gryfindor'
//   }
// ];

// // нужно объденить два массива в один объект, такого вида
// var mysolution = {}
// for (let i = 0; i < wizards.length; i++) {
//   const concatName = wizards[i].name.replace(' ', '')
//   mysolution[concatName] = {}
//   mysolution[concatName]['house'] = wizards[i].house
//   if (points[concatName] === undefined) {
//     mysolution[concatName]['points'] = 0
//   } else {
//     mysolution[concatName]['points'] = points[concatName]
//   }

// }
// console.log(mysolution)


// // Интересная задача
// var solution = { 
//   HarryPotter: {house: "Gryfindor", points: 500},
//   CedricDiggory: {house: "Hufflepuff", points: 750},
//   Tonks: {house: "Hufflepuff", points: 0},
//   RonaldWeasley: {house: "Gryfindor", points: 100},
//   HermioneGranger: {house: "Gryfindor", points: 1270}
// };


// function validAnagram(str1, str2) {
//   if(str1.length !== str2.length) {
//     return false
//   } 
//   const result = {} 
//   for (let i = 0; i < str1.length; i++) {
//     let letter = str1[i] 
//     if (!result[letter]) {
//       result[letter] = 1;
//     } else {
//       result[letter]++;
//     }


//   } 
//   return console.log(result)
// }








// function validAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false
//   }
//   const sortStr1 = str1.toLowerCase().split('').sort();
//   const sortStr2 = str2.toLowerCase().split('').sort();
//   return sortStr2.join('') === sortStr1.join('');  
// }

// console.log(validAnagram('aaz','zaa'))
// // validAnagram('','') //true
//false
// validAnagram('anagram','nagaram') //true
// validAnagram('qwerty','qeywrt') //  




// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     if ((arr[left] + arr[right]) === 0) {
//       return [arr[left], arr[right]];
//     } else {
//       left++;
//       right--;
//     }
//   }
// }



// const arr = [1, 2, 3, 4, 6, 10, 15, 20, 30, 40];

// function sumArr(arr, s) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     if (arr[left] + arr[right] === s) {
//       return [arr[left], arr[right]]
//     } else if (arr[left] + arr[right] < s) {
//       left++;
//     } else {
//       right--;
//     }
//   }
// }

// console.log(sumArr(arr, 25));

// console.log(sumZero([-3,-2,-1,0,1,2,3]))
// console.log(sumZero([-2,0,1,3]))
// console.log(sumZero([1,2,3]))

// const arr = [1, 2, 3, 4, 5, 6]; // [6 5 4 3 2 1]

// function reverse(arr) {
//   for (let i = arr.length; i > 0; i--) {
//   arr.push(i);
//   arr.shift();
//   }
// }

// console.log(reverse(arr));
// console.log(arr)\

// const explorers = [
//   ["Mallory", "Everst", "Mont Blanc", "Pillar Rock"],
//   ["Mawson", "South Pole", "New Hebrides"],
//   ["Hillary", "Everst", "Soth Pole"]
// ]

// function receiveToponimArray(arr) {
//   const toponims = arr.reduce((accumulator, item) => Array.of(...new Set([...accumulator, ...item.slice(1)])), []);

//   const newDataSet = toponims.map((toponim) => {
//     const foundsToponims = [];
//     for (const prop of arr) {
//       if (prop.includes(toponim)) {
//         foundsToponims.push(prop[0])
//       }
//     }
//     return [toponim, ...foundsToponims]
//   });
//   return newDataSet
// }



// console.log(receiveToponimArray(explorers));

// function getToponim(arr) {
//   const allPoints = arr.reduce((acc, item) => {
//     acc = [...acc, ...item.slice(1)]; // acc.concat(item.slice(1))
//     acc = Array.of(...new Set(acc))
//     return acc;
//   }, []);

//   const res = allPoints.map((point) => {
//     const searchersOnPoint = [];
//     arr.forEach((searcher) => {
//       if (searcher.includes(point)) searchersOnPoint.push(searcher[0])
//     })
//     return [point, ...searchersOnPoint]
//   })

//   return res;
// }
// console.log(getToponim(explorers));



// module.exports = function (explorers) {
//   function getToponim(arr) {
//     const allPoints = arr.reduce((acc, item) => {
//       acc = [...acc, ...item.slice(1)]; // acc.concat(item.slice(1))
//       acc = Array.of(...new Set(acc))
//       return acc;
//     }, []);

//     const res = allPoints.map((point) => {
//       const searchersOnPoint = [];
//       searchers.forEach((searcher) => {
//         if (searcher.includes(point)) searchersOnPoint.push(searcher[0])
//       })
//       return [point, ...searchersOnPoint]
//     })

//     return res;
//   }
//   getToponim(explorers);
// };




// function foo(diffs) {
//   let numbers = 0;
//   for (let i = 0; i < diffs.length / 2; i++) {
//     if (diffs[i][0] == 1) {
//       diffs[i][0] = -1;
//       numbers++;
//     }
//   } 
//   for (let i = 0; i < diffs.length / 2; i++) {
//     if (diffs[i][1] == 1) {
//       diffs[i][1] = -1;
//       numbers++;
//     }
//   }
// }



// const arr = [  
//   [1, 0],  
//   [0, 1],  
//   [1, 1]  
// ]



// // function foo(diffs) {
// //   var numbers = 0;
// //   for (var i = 0; i < diffs.length / 2; i++) {
// //     if (diffs[i][0] == 1) {
// //       diffs[i][0] = -1;
// //       numbers++;
// //     }
// //   }
// //   numbers = 0
// //   for (var i = 0; i < diffs.length / 2; i++) {
// //     if (diffs[i][1] == 1) {
// //       diffs[i][1] = -1;
// //       numbers++;
// //     }
// //   }
// //   return diffs
// // }

// // console.log(foo(arr))
// // console.log(arr)


// const data = [
//   {
//     geometry: [10, 20],
//     text: "James"
//   },
//   {
//     geometry: [20, 40],
//     text: "Bond"
//   },
//   {
//     geometry: [5, 40],
//     text: "Bond"
//   },
//   {
//     geometry: [15, 40],
//     text: "Fuck"
//   }
// ]

// const dictionary = ['James', 'Bond']

// console.log(foo(data, dictionary))

// function foo(inputData, inputDictionary) { 

//   sortByCoordinates(inputData);

//   const textMessages = inputData.map(function (item) {
//     return item.text;
//   });

//   const resultMessage = textMessages.join(' ');

//   inputData.forEach(function (item) {
//     item.geometry[0] = Math.log10(Math.sqrt(item.geometry[0] * Math.pow(2, 4)) / 256);
//     item.geometry[1] = Math.log10(Math.sqrt(item.geometry[1] * Math.pow(2, 4)) / 256);
//   }); 

//   const absentWords = [];
//   for (let i = 0; i <= inputData.length - 1; i++) {
//     let found = false;
//     for (let j = 0; j <= inputDictionary.length ; j++) {
//       if (inputData[i].text === inputDictionary[j]) {
//         found = true;
//       }
//     }
//     if (!found) {
//      absentWords.push(inputData[i].text);
//     }
//   } 

//   if (absentWords.length) {
//     return "Unreadable message";
//   } else {
//     return resultMessage;
//   }

//   function sortByCoordinates(arr) {
//     for (let i = 0, endI = arr.length - 1; i < endI; i++) {
//       for (let j = 0, endJ = endI - i; j < endJ; j++) {
//         if (arr[j].geometry[0] > arr[j + 1].geometry[0]) {
//           let swap = arr[j];
//           arr[j] = arr[j + 1];
//           arr[j + 1] = swap;
//         }
//       }
//     }
//     return arr;
//   }

// }

// ALGO - 1

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     let sum = arr[left] + arr[right]
//     if (sum === 0) {
//       return [arr[left], arr[right]]
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }  

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))


// function sum(params) {
//   let total = params;
//   function sum2(int) {
//     total += int
//     return sum2;
//   }
//   sum2.valueOf = () => total;
//   return sum2;
// }


//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf

//console.log(+sum(2)(3)(4)(5) === 14);


// function add(a) {
//   return function (b) {
//     return a + b
//   }
// } 

//console.log(add(3)(4) === 7);

// Number.prototype.add = function (num) {
//   return this + num
// }

//console.log(4..add(3) === 7);

// function fizzBuzz(int) {
//   for (let i = 1; i <= int; i++) {
//     if (i % 15 === 0) {
//       console.log('fizz')
//     } else if (i % 5 === 0) {
//       console.log('buzz')
//     } else if (i % 3 === 0) {
//       console.log('fizzBuzz')
//     } else {
//       console.log(i)
//     }
//   }
// }

// 3 === 'fizz'
// 5 === 'buzz'
// 3 and 5 === 'fizzBuzz'
//console.log(fizzBuzz(20));




// const arr = [[1, 2, 3], [1, 4, 5], [[[[[[[[[[[5]]]]]]]]]]]]; // [1, 2, 3, 1, 4, 5, 5]

// function flat(arr) {
//   return arr.reduce((prev, cur) => {
//     if (Array.isArray(cur)) {
//       return [...prev, ...flat(cur)]
//     }
//     return [...prev, cur]
//   }, [])
// }


// const flat = (arr) => arr.reduce((acc, item) => Array.isArray(item) ? [...acc, ...flat(item)] : [...acc, item], [])

// console.log(flat(arr));


// const str = 'AASSAABBBBSSSS' // A4B4S4

// function RLE(str) {
//   let prev = '';
//   let counter = 1;
//   let result = '';
//   for (const letter of str) {
//     if (prev === letter) {
//       counter++;
//     } else {
//       result += prev + (counter > 1 ? counter : '')
//       counter = 1;
//       prev = letter;
//     }
//   }
//   return result + prev + (counter > 1 ? counter : '');
// }



// console.log(RLE(str));

// const str = 'диороид';

// function palindrome(str) {
//   let left = 0;
//   let right = str.length - 1;
//   while (left <= right) {
//     if (str[left] !== str[right]) {
//       return false;
//     } else {
//       right--;
//       left++;
//     }
//   }
//   return true;
// }


// console.log(palindrome(str));



// Count Unique Values 

// Implementing a function called countUniqueValues
// which accepts a sorted array, and counts the 
// unique values in the array. There can be negative 
// numbers in the array, but it will be sorted 


// function countUniqueValues(arr) {
//   if (arr.length === 0) return 0
//   let i = 0
//   for (j = 1; j < arr.length ; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j]
//     }

//   }
//   return i + 1 
// }


// console.log(climbingLeaderboard([100, 100, 90, 80, 75, 60], [50, 65, 77, 90, 102]))

// function climbingLeaderboard(scores, alice) {

//   const item = alice.shift()
//   console.log(item)

//   scores.push(item)
//   console.log('scores', scores)

//   arrSort = scores.sort((a, b) => {
//     return b - a
//   })

//   let result = []

//   for (let num of arrSort) {
//     if (!result.includes(num)) {
//       result.push(num)
//     }
//   }

//   return result.length
// }

// const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

// function binSearch(arr, searchInt) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === searchInt) {
//       return mid;
//     } else if (arr[mid] > searchInt) {
//       right = mid - 1;
//     } else if (arr[mid] < searchInt) {
//       left = mid + 1;
//     }
//   }
//   return false;
// }

// console.log(binSearch(arr1, 44));


//Напиши в вк как будешь готов, я зайду в хэнг

// const arr = [1, 22, 91, 25, 33, 66, 7, 8, 5, 9, 23, 47];

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let maxEl = arr[0];
//     for (let j = 0; j < arr.length - i; j++) {
//       if (arr[j] > maxEl) {
//         maxEl = arr[j];
//       }
//     }

//     let maxInd = arr.indexOf(maxEl);
//     let buff = arr[arr.length - (i + 1)]

//     arr[arr.length - (i + 1)] = maxEl;
//     arr[maxInd] = buff;
//   }
//   return arr;
// }

// console.log(sort(arr));



// const selectionSort = arr => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     let indexMin = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[indexMin] > arr[j]) {
//         indexMin = j;
//       }
//     }
//     if (indexMin !== i) {
//       [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
//     }
//   }
//   return arr;
// };


// function InsertionSort(A)  {                               // отсортировать по возрастанию.
//   var n = A.length;
//   for (var i = 0; i < n; i++) {
//     var v = A[i], j = i - 1;
//     while (j >= 0 && A[j] > v) { A[j + 1] = A[j]; j--; }
//     A[j + 1] = v;
//   }
//   return A;    // На выходе сортированный по возрастанию массив A.
// }

// console.log(smartSum([1,2],3))

// function smartSum(...data){
//   // let r = [];
//   // data.forEach(el => Array.isArray(el) ? r.concat(smartSum(el)) : r.push(el) )
//   // return r

//   data
// }


// function smartSum(...array){ 
//   for (let i = 0; i < array.length; i++) {
//       if(array[i] instanceof Array){
//           array.splice.apply(array,[i,1].concat(array[i]));
//           i--;
//       }
//   };
//   return array.reduce((acc,el) => acc + el);
// }

// console.log(capitalize("abcdef"))

// function capitalize(s) {
//   const strSplit = s.split('')
//   const array = []
//   strSplit.forEach((el, index) => { 
//     if (index % 2) {
//       array.push(el.toUpperCase())
//     } else {

//     }
//   })
//   return array
// };


/// hi hi





// write a function called maxSubarraySum which accepts an array
// of integers and a number called n. The function 
// should calculate the maximum sum of n consecutive 
// elements in the array.


// function maxSubarraySum(arr, num) {
//   let max = -Infinity
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0
//     for (let j = 0; j < num; j ++) {
//       temp += arr[i + j]
//     }
//     if (temp > max) {
//       max = temp
//     }
//   }
//   console.log(temp,max)
//   return max
// }
  
// maxSubarraySum([2,6,9,2,1,8,5,6,3],3)




//Бин поиск

function search(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i
    } 
  }
  return -1
}



function searchBin(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      return mid
    } else if (arr[mid] > num) {
      right = mid - 1
    } else if (arr[mid] < num) {
      left = mid + 1
    }
  }
  return false
} 

console.log(search([1, 2, 3, 4, 5, 6], 4))//3




