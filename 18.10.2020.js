//https://www.codewars.com/kata/52f6be83172a8ba0be000342/train/javascript
const obj = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
      next: null
    }
  }
}
function reverseList(list) {
    if(list === null) return null;
    let head = list;
    let prev = null;
    while(head !== null) {
        let tmp = head.next;
        head.next = prev;
        prev = head;
        head = tmp;
    }
    
    console.log(prev, 'prev');
}
// Expected: [3, [2, [1, null]]], instead got: undefined

// console.log(reverseList(obj))

function reverseList2(list) {
    if(list === null) return null;
    let array = [];
    let count = 0;
    for(let i = 0; i < list.length; i++) {
        if(Array.isArray(list[i])) {
            reverseList2(list[i])
        } else {
           
        }
    }
    console.log(count)
}

// reverseList2([1, [2, [3, null]]])

//https://www.codewars.com/kata/56b3b9c7a6df24cf8c00000e/train/javascript


function arrayDepth(array) {
  let count = 1;
  array.forEach(el => {
    if (Array.isArray(el)) {
      count = arrayDepth(el) + 1;
    }
  })
  return count;
}

// console.log(arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]))



// https://www.codewars.com/kata/5aa1ca484a6b34f9a000011e/train/javascript

