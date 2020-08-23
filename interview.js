// // //Реализовать функцию, потом спросили какая сложность у этого
// // // решения (O(2n) по памяти, O(n) по скорости)


// // test('[]()<>') // => true
// // test('[]()<)') // => false
// // test('[(<>)]') // => true
// // test('[(<>])') // => false

// // function test(str) {

 
// // } 


// // // Написать функцию makeReq получающую на вход массив ссылок и число указывающее максимальное количетсво одновременных запросовю . Условия одновременно должно выполняться не более указнного числа 


// // const term1 = 3456
// // const term2 = 43

// // columnAddition(term1,term2)

// // function columnAddition(term1, term2) {
// //     const arrayOfResult = []
// //     const arrayOfNumbers1 = String(term1).split('')
// //     let arrayOfNumbers2 = String(term2).split('')

// //     if (arrayOfNumbers1.length !== arrayOfNumbers2.length) {
// //         let arrayOfZero = []
// //         for (let i = 0; i < (arrayOfNumbers1.length - arrayOfNumbers2.length); i++) {
// //             arrayOfZero.push(i * 0)
// //         }
// //         arrayOfNumbers2 = [...arrayOfZero, ...arrayOfNumbers2]
// //     }

// //     for (let i = 0; i < arrayOfNumbers1.length; i++) {
// //         arrayOfResult.push(Number(arrayOfNumbers1[i]) + Number(arrayOfNumbers2[i]));
// //     }
// //     return Number(arrayOfResult.join(''))
// // }


// // // Задача номер 1 

// // const a = {
// //     valueOf: function() {
// //         return 1
// //     }
// // }

// // const b = {
    
// // }

// // a.valueOf = 1 // {valueOf: 1}
// // b.valueOf = 4
// // console.log(a.valueOf + b.valueOf)
// // console.log(a + b) // 5


// // // задача 2 

// // const a = {
// //     p: 10
// // }

// // const obj = Object.create(a) // obj.prototype.p


// // console.log(obj.p) // 10

// // delete obj.p
// // console.log(obj.p)// 10


// // Написать функцию makeRequests, получающую на вход массив ссылок и число, указывающее
// // // максимальное количество одновременных запросов. Условия:
// // // одновременно должно выполняться не более указанного числа запросов
// // // должен возвращаться массив результатов в той же последовательности, что и адреса запросов
// // // нельзя делать повторные запросы на дублирующиеся адреса (при этом результат всё равно
// // // должен присутствовать в результирующем массиве) 


// // // makeRequest(['url1', 'url2', 'url1', 'url3'], 2)
// // //     .then(([
// // //         result1,
// // //         result2,
// // //         result1,
// // //         result3
// // //     ]) => { })
// //     const urls = ['url1', 'url2', 'url1', 'url3']
// // // массив ссылок и число

// // const makeRequest = (urls, total) => {
// //     if (urls.length === 0) {
// //         return false
// //     }

// //     const res = [];

// //     const transformInputArray = (array) => {
// //       const res = {};
// //       array.forEach((value, index) => {
// //         if(!res[value]) {
// //           res[value] = [];
// //         }
// //         res[value].push(index);
// //       })
// //       return res;
// //     }
// //     //{ url1: [ 0, 2 ], url2: [ 1 ], url3: [ 3 ] }
// //     console.log(transformInputArray(urls))

// //     const transormedUrls = transformInputArray(urls);

// //     const request = (ids, cb) => {
      
// //     }

// //     for(let i = 0; i < total; i++) {
// //       transormedUrls[urls[i]] // id[]
// //       request(urls[i], cb)
// //     }
// //     urls.forEach(value => {
// //       request(value)
// //     })
// //     // // {
// //     // //   'url1': []
// //     // // }

// //     // const request = (cb) => {
// //     //     fetch('')
// //     // }
// // }
// // // makeRequest(urls,2)


// // Решение:


// // const urls = [
// //     'google.com',
// //     'yandex.ru',
// //     'youtube.com',
// //     'yandex.ru',
// // ];

// // const request = (urls, total) => {
// //     const result = urls.reduce((acc, path, index) => ({ ...acc, [path]: null }), {});
// //     console.log(result)
// //     //{ 'google.com': null, 'yandex.ru': null, 'youtube.com': null }

// //     const requestPromise = [];
// //     const requestQue = [];

// //     function promiseQue() {
// //         if (urls.length === 0) {
// //             return;
// //         }

// //         return new Promise(resolve => {
// //             const url = urls.shift();
// //             console.log(url)

// //             if (requestQue.some(item => item === url)) {
// //                 resolve(promiseQue());
// //             } else {
// //                 fetch(url).then((data) => {
// //                     result[url] = data;

// //                     resolve(promiseQue());
// //                 });
// //             }
// //             requestQue.push(url);
// //         })
// //     }

// //     for (let i = 0; i < total; i++) {
// //         requestPromise.push(promiseQue());
// //     }
    
// //     return Promise.all(requestPromise).then(() => {
// //         return requestQue.reduce((acc, item) => {
// //             acc.push(result[item]);
// //             return acc;
// //         }, []);
// //     })
// // }
// // request(urls, 2).then(console.log);





// //ЗАДАЧА 1 - медиана массива

// // [1, 5, 3, 6, 4, 6] -> 4
// // [1, 7, 2] -> 2

// // [1, 2, 6, 99, 99.5, 100] -> (6 + 99) / 2 -> 52.5
// // [1, 6, 99, 100] -> (6 + 99) / 2 -> 52.5
// // [1, 6, 99] -> 6
// const arr = [1, 5, 3, 6, 4, 6]

// function getMediane (arr) {
//     if(arr.length === 0) {
//         return false
//     }
//     const sorted = arr.sort((a,b) => (a-b))

//     if (sorted.length % 2 === 0) { //  [1, 6, 99, 100]
//         return (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2;
//     } else { // [1, 2, 3]
//         // [1, 2, 3].length / 2 -> 1.5
//         // [1, 2, 3, 4, 5].length / 2 -> 2.5
//         return sorted[Math.floor(sorted.length / 2)];
//     }
// } 


// Написать ф-цию для проверки правильного вложения скобок.

// Скобки могут быть только трех видов ()[]<>
console.log(test('[]()<>')) // true
console.log(test('[]()<)')) // false
console.log(test('([])<>')) // true
console.log(test('([]<)>')) // false

/*
  Длинна входящей строки 6 символов,
  скобки всегда будут открыты и закрыты
*/

//
// console.log('[]()<>'.split('')) //  [ '[', ']', '(', ')', '<', '>' ]
// var properties = string.split(', ');
// var obj = {};
// properties.forEach(function(property) {
//     var tup = property.split(':');
//     obj[tup[0]] = tup[1];
// });
const arr = [ '[', ']', '(', ')', '<', '>' ]


function test(str) {
    const arr = str.split('');
    const newObj = {}
    for(let value of arr) {
      switch(value) {
        case ')':
          if(!newObj['(']) return false;
          else newObj['('] = value;
          break;
        case ']':
          if(!newObj['[']) return false;
          else newObj['['] = value;
          break;
        case '}':
          if(!newObj['{']) return false;
          else newObj['{'] = value;
          break;
        case '>':
          if(!newObj['<']) return false;
          else newObj['<'] = value;
          break;
        default:
          newObj[value] = true;
        }
    }
    for (let key in newObj) {
        if (typeof newObj[key] === 'boolean') return false;
    }
    return true;
} // мы устроились в facebook

//https://habr.com/ru/company/vdsina/blog/514760/


const a = {
    s: 'sd',
    b: function () {
        return () => { console.log(this) }
    }
}

a.b()