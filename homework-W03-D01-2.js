// Write a function that takes the array below and modifies its order as follows:
// •Remove the first element
// •Add your dream car as the new first element
// •Remove the last element
// •Add your first car as the new last element



let myDreamCars = ["Charger", "Cayenne", "Cyber Truck", "G Wagon", "Civic"] 

function mutateArray (arr) {
         arr.shift() // remove first
         arr.unshift("Tesla") // add in the first
         arr.pop() // remove last
         arr.push("Tesla") // add in the last
         return arr
   }; 

const result = mutateArray(myDreamCars)
console.log(result)
