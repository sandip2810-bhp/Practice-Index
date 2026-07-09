function isEven(n) {
    return n % 2 === 0
}

function isOdd(n){
    return n % 2 !== 0
}

module.exports = {
    findisEven: isEven,
    findisOdd: isOdd
}