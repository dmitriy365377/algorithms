// // var list1 = [
// //     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
// //     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
// //     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
// //     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// //   ];

const { max } = require("ramda");

// const { count } = require("console");



// // function countLanguages(list) {
// //     let obj = {}
// //     for (const developer of list) {
// //       developer.language
// //       let count = 0
// //       for(const eachObj of list) {
// //         if(developer.language === eachObj.language){
// //             count++
// //         }
// //       }
// //       obj[developer.language] = count
// //     }
// //     return obj  
// // }
// // const x = [{"firstName":"Mark","lastName":"G.","country":"Scotland","continent":"Europe","age":22,"language":"JavaScript"},{"firstName":"Victoria","lastName":"T.","country":"Puerto Rico","continent":"Americas","age":30,"language":"Python"},{"firstName":"Emma","lastName":"B.","country":"Norway","continent":"Europe","age":19,"language":"Clojure"}]
// // console.log(countLanguages(x))
// // //  Expected: { JavaScript: 1, Python: 1, Clojure: 1 }, instead got: { C: 0, JavaScript: 1, Ruby: 0 }
 








// // function isRubyComing(list){
// //     return list.find(developer => developer.language === 'Ruby') !== undefined
// //     return list.some(developer => developer.language === 'Ruby')
// // }


  
// // function isRubyComing(list) {
// //     for(let i = 0; i < list.length; i++){
// //         if(list[i].language === 'Ruby') {
// //             return true
// //         } 
// //     }
// //     return false
// // }



// // function greetDevelopers(list) {
// //     const newList = []
// //     for (const developer of list) {
// //         newList.push({ ...developer, greeting: `Hi ${developer.firstName}, what do you like the most about ${developer.language}?` })
// //     }
// //     return newList;
// // }
// // console.log(greetDevelopers(list1))
// //   function greetDevelopers(list) {
// //     return list.map(developer => ({
// //       ...developer,
// //       greeting:`Hi ${developer.firstName}, what do you like the most about ${developer.language}?`
// //     }))
// //   }
// //     console.log(greetDevelopers(list1))

//   // function countDevelopers(list) {
//   //     let count = 0
//   //     for(const developer of list) {
//   //         if(developer.continent === 'Europe' && developer.language === 'JavaScript'){
//   //           count++
//   //         }
//   //     }
//   //     return count
//   // }

// // function countDevelopers(list) {
// //     let count = 0
// //     for (let i = 0; i < list.length; i++) {
// //         if (list[i].continent === 'Europe' && list[i].language === 'JavaScript') {
// //             count++
// //         }
// //     }
// //     return count
// // }




// // https://www.codewars.com/kata/find-the-unique-number


// function findUnique1(numbers) {
//   for (const number of numbers) {
//     let count = 0;
//     for(const number2 of numbers) {
//       if(number === number2) {
//         count++
//       }
//     } 
//     if(count === 1) {
//       return number
//     }
//   }
// }
// // [0, 0, 1, 1, 2, 2, ... 499, 499, 500]

// // const max = 16000000
// // let array = []
// // for (let i = 0; i < max; i++) {
// //   array.push(i, i)
// // }
// // array.push(max)

// // const start = new Date;
// // console.log(findUnique3(array));
// // const end = new Date;

// // console.log(`${(end - start) / 1000}ms`);

// //            O(n²)      O(n)
// //  5000 -  0.144ms
// // 10000 -  0.515ms
// // 20000 -  1.771ms   0.045ms
// // 40000 -  6.999ms    0.04ms
// // 80000 - 29.380ms    0.05ms
// // 800000              0.317ms
// // 4000000              4.31ms
// // 8000000            14.043ms

// // O(n)



// function findUnique2(numbers) {
//   const counter = {};
//   for (const element of numbers) {
//     counter[element] = 0
//   }

//   for (const el of numbers) {
//     counter[el] = counter[el] + 1
//   }

//   for (const key in counter) {
//     if (counter[key] === 1) {
//       return +key
//     }
//   }
//   // +Object.keys(counter).find(key => counter[key] === 1)
// }

// function findUnique3(numbers) {
//   let res = 0;
//   for (const num of numbers) {
//     res ^= num;
//   }
//   return res;
// }

// // console.log(3 ^ 8);
// // https://standards.ieee.org/standard/754-2008.html
// // https://en.wikipedia.org/wiki/IEEE_754#/media/File:Float_example.svg
// // 0011
// // 1000
// // 1011

// // 0101011010101
// // 0101011010101
// // 0000000000000

// // n ^ n === 0
// // n ^ 0 === n

// // 4 ^ (5 ^ 3) === (4 ^ 5) ^ 3

// // 4 ^ 5 ^ 3 ^ 5 ^ 5 ^ 4 ^ 5

// // 0000000
// // 1010110
// // 1010110

// // counter == { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }

// // counter = {
// //   1: 0,
// //   2: 0,
// //   3: 0,
// //   4: 0,
// //   5: 0,
// // }

// // console.log(findUnique([1,2,3,4,5,4,4,3,2,1]));


// console.log(sumArray([1, -2, 2, 3, 4, 5, -3, -1]))// дан массив чисел найти индексы первой пары чисел в сумме дающих ноль => [1,5]

// // function sumArray(list) {
// //   let result = [-Infinity, Infinity];
// //   for(let j = 0; j < list.length; j++ ){
// //     for(let i = j + 1; i < list.length; i++){
// //       if(list[j] + list[i] === 0) {
// //         console.log([i, j])
// //         if (i - j < result[1] - result[0])
// //           result = [j, i];
// //       }
// //     }
// //   }
// //   return result;
// // }


// function sumArray(list) {
//   const obj = {};
//   for(let i = 0; i < list.length; i++) {
//     obj[list[i]] = i
//   }
//   list.forEach((number) => number*(-1) )
//   return obj
// }

// // 1. Создали объект, в котором храним мндекс по числу
// // 2. Ходим по всем числам и смотрим, есть ли противоположное этому числу в массиве (проверяем через объект)
// // 3. Заодно мы можем узнать, какой индекс у этого противоположного числа
// // 4. Так же, как в предыдущем решении, запоминать пару, у которой наименьшее расстояние между индексами



// const contragents = [
//   {
//     props: {
//       array_debt: [
//         {
//           debt: "67124.41",
//           org: "ИП Быстрова Н.В. (БЯЗЬ)"
//         }
//       ]
//     }
//   },
//   {
//     props: {
//       array_debt: [
//         {
//           debt: "104259.16",
//           org: "ИП Анохин А.А. (с 2020)"
//         },
//         { 
//           debt: "-68.76",
//           org: "ИП Москалюк Юлия Алиевна"
//         }
//       ]
//     }
//   },
// ]

// const contractors = [
//   {
//     name: "Анохин А. А."
//   },
//   {
//     name: "Быстрова Н. В."
//   },
//   {
//     name: "Москалюк Ю. А."
//   },
//   {
//     name: "Попов Ю. А."
//   }
// ]

  // console.log("ИП Москалюк Юлия Алиевна".split(' ')[1])
  //.org.split(' ')[1])
// const newArray = contractors.map(element => {
//   const name = element.substring(0, element.indexOf(" "));
//   return {
//     ...element,
//     debt: contragents.find(obj => obj.props.array_debt.find(eachObj => eachObj.org.split(' ')[1]))
//   }
// })

// const newArray = contractors.map(element => {
//   const name = element.name.substring(0, element.name.indexOf(" "));
//   let debt = '';
//   contragents.forEach(obj => {
//     obj.props.array_debt.forEach(persons => {
//       const org = persons.org.split(' ')[1];
//       if (org === name ) {
//         debt = persons.debt;
//       }
//     })
//   });
  
//   return {
//     ...element,
//     debt 
//   }
// });

// console.log(newArray)


// const newContragents = contragents.reduce((acc, obj) => {
//   return [...acc, ...obj.props.array_debt];
// }, [])

// const newArray = contractors.map(element => {
//   const name = element.name.substring(0, element.name.indexOf(" "));
//   let debt = null;
//   newContragents.forEach(person => {
//     const org = person.org.split(' ')[1];
//     if (org === name) {
//       debt = person.debt;
//     }
//   });
//   return {
//     ...element,
//     debt
//   }
// });



// var list1 = [
//   { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//   { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//   { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//   { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ];
// console.log(findSenior(list1))


// function findSenior(list) {
//  const maxAge = Math.max(...list.map(el => el.age))
//  return list.filter(el => el.age === maxAge)
// }


// var list1 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
//   { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
//   { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
//   { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
//   { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
// ];

// var list2 = [
//   { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' }
// ];

// console.log(allContinents(list1))

// function allContinents(list) {
//   const checkContinent = [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania' ]
//   const filterContinent = list.map(dev => dev.continent);
//   const mySet = new Set(filterContinent)
//   return checkContinent.every(continent => mySet.has(continent))
// }

var list3 = [
  { firstName: 'Sofia', lastName: 'P.', country: 'Italy', continent: 'Europe', age: 41, language: 'Clojure' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Python' },
  { firstName: 'Rimas', lastName: 'C.', country: 'Jordan', continent: 'Asia', age: 44, language: 'Java' }
];

console.log(isAgeDiverse(list3))

function isAgeDiverse(list) {
  return new Set(list.map(({ age }) => {
    if (age > 100) return 10;
    return Math.floor(age/10)
  })).size === 10;
}


const searchCity = [
  {id:1,name:"Новосибирск"}
]
  
const fixedDeliveryData = {
  "Новосибирск":["2020-06-25", "2020-06-29"],
  "Москва":["2020-06-25", "2020-06-29"],
}
  
const start = new Date('2020-06-25')
const end = new Date('2020-06-29')

const selected = new Date('2020-06-28')

''

const selected = new Date(Y, M, D);

const isValid = start <= selected && selected <= end;

const city = searchCity[0];
let filterDeliveryData = fixedDeliveryData[city.name];
  
let filterDeliveryData = null

for (const key in fixedDeliveryData) {
  if (key === searchCity[0].name) {
    filterDeliveryData = fixedDeliveryData[key]
  }
}
  
console.log('filterDeliveryData',filterDeliveryDat) 


const dbConnection = new Promise(resolve => {
  db.connect(() => {
    resolve();
  });
})

db.connect(() => {
  db.get((data) => {
    db.get(() => {
      // ...
    })
  })
})

dbConnection.then(() => {
  console.log('connected!');
}).then(() => {
  db.get()
}).then(() => {
  // ...
})