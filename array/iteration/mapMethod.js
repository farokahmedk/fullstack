
function myMap ( arr, cb ) {
     const tempArr = [];
     for ( let i = 0; i < arr.length; i++ ) {
          tempArr.push( cb( arr[ i ], i, arr ) );
     }
     
     return tempArr;
}



const newArray = [
     'Something',
     'Another Something',
     'Hello World',
];



const one = myMap( newArray, ( value ) => value.length);
const two = myMap( newArray, ( value ) => value.toUpperCase());
const three = myMap( newArray, ( value ) => value.substring(2));

// console.log(one);
// console.log(two);
// console.log(three);

const newArr = [
     {text: 'Something'},
     {text: 'Another Something'},
     {text: 'Hello World'},
];
const four = newArr.map( v => v.length ) // result [9, 17, 11]
const five = newArr.map( (value) => {
     return {
          ...value,
          title: 'hello'
     }
})   // result [undefined, undefined, undefined]

console.log(four);
console.log( five );
