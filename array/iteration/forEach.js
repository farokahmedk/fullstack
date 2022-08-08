function myForEach ( arr, cb ) {
     for ( let i = 0; i < arr.length; i++ ) {
          cb(arr[i], i, arr);
     }
}



const newArray = [ 1, 2, 3, 4, 5 ];

myForEach( newArray, ( value, index, arr ) => {
     
     console.log(value, index, arr);
     
} );