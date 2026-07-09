// const add = require("./add")
// const even = require("./even")
// const odd = require("./odd")
// const prime = require("./prime")

// const express = require("express")
// const app = express()

// const result = add(9,1)
// console.log("Addition =", result)
// console.log("Even =", even(10))
// console.log("Odd =", odd(7))
// console.log("Prime =", prime(11))


// const PORT = 3000
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })

const math = require('./all');

console.log(math.findisEven(4));
console.log(math.findisOdd(7));