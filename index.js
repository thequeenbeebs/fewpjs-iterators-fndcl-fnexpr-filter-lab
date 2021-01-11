// Code your solution here
 function findMatching(arrayOfDrivers, name) {
     return arrayOfDrivers.filter(e => e.toLowerCase() === name.toLowerCase())
 }

 function fuzzyMatch(arrayOfDrivers, letters) {
     let length = letters.length;
     return arrayOfDrivers.filter(name => name.slice(0, length) === letters)
 }

 function matchName(arrayOfDrivers, string) {
    return arrayOfDrivers.filter(object => object.name === string)
 }