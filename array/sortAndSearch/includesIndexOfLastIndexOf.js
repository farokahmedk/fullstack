/**
 * @title: Includes and IndexOf, LastIndexOf
 *
 */

const arr = ["One", "Two", "Two", "Three", "Four"];

//Includes
console.log(arr.includes("Two")); //true
console.log(arr.includes("Two", 3)); //false. because it search from index 2

//IndexOf

console.log(arr.indexOf("Two")); // 1
console.log(arr.indexOf("Two", 3)); // -1

//LastIndexOf

console.log(arr.lastIndexOf("Two")); // 2
