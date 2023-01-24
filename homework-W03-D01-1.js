// Write a function that takes in an array of numbers as a parameter and uses the .forEach() method to double the value of all even numbers in the array. The function should not use any other loops or array methods.

const array = [
    1,
    2,
    18,
    77,
    98,
    59,
    68
]

const doubleEach = arr => {
    newArray = []
    arr.forEach(element => {
        if (element % 2 === 0) {
            let num = element * 2
            newArray.push(num)
        }
    });
    return newArray
}

const result = doubleEach(array)
console.log(result)
