// <!—
// Дана строка, состоящая из букв A-Z:
// * "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
// * Нужно написать функцию RLE, которая на выходе даст строку вида:
// * "A4B3C2XYZD4E3F3A6B28"
// * И сгенерирует любую ошибку, если на вход пришла невалидная строка.
// *
// * Пояснение:
// * 1. если символ встречается 1 раз, он остается без изменений
// * 2. если символ повторяется более 1 раза, к нему добавляется количество повторений

const { type } = require("os") // ?

// —>
const str = "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
RLE(str)

function RLE(str) {
    if(typeof str !== 'string') {
        return false
    }
    let result = ''
    let prev = ''
    let counter = 1

    for(const current of str) {
        if(current === prev) {
            counter++
        } else {
            result += counter === 1 ? prev : (prev + counter)
            counter = 1
        }
        prev = current
    }
    return console.log(result)
}