//Задача 2 - сколько в массиве значений больше медианы 
// [1, 5, 3, 6, 4, 6, 4, 1000, 5, 5000, 2, 43, 4342] // 4 раза 
// в 2 или более раз больше, чем медиана за последние 5 дней

// 1,2,3,4,5,100, 1000


const numberOfArray = [1, 5, 3, 6, 4, 6, 4, 1000, 5, 5000, 2, 43];
console.log(findNumbersWhichGreateMediana(numberOfArray));

function findNumbersWhichGreateMediana(numberOfArray) {
    if (numberOfArray.length === 0) {
        return false
    }
    // [1, 2, 3, 4, 4, 5, 5, 6, 6, 43, 1000, 5000]
    const numberOfArraySort = numberOfArray.sort((a, b) => a - b)

    console.log(numberOfArraySort)


    if (numberOfArraySort % 2 === 0) {
        return numberOfArraySort.filter((number) => {
            return number >= console.log(((numberOfArraySort[numberOfArraySort.length] + numberOfArraySort[numberOfArraySort.length - 1]) / 2))
        })
    } else if (numberOfArraySort % 2 !== 0) {
        return numberOfArraySort.filter((number) => number >= numberOfArraySort[numberOfArraySort.length / 2])
    }

}



function calcSmsAmount(arr) {
    if (arr.length < 5) {
        return 0;
    }

    let counter = 0;

    const slice = arr.slice(5, arr.length);

    for (let i = 0; i < slice.length; i++) {
        const mediane = getMediane(arr.slice(i, i + 5));
        if (slice[i] > mediane * 2) {
            counter++
        }
    }

    return counter;
}



// 4 рассказать про наследование и поправить код

function Animal() {
  //...
}

Animal.prototype.eat = function() {
  //...
}

function Rabbit() {
   // add Animal.call(this)

  //...
}

// add inheritance
// Rabbit.prototype = Object.create(Animal.prototype);
// Rabbit.prototype.constructor = Rabbit;

var rabbit = new Rabbit();
var animal = new Animal();


rabbit.eat(); // <- rabbit.eat is not a function
