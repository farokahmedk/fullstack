const MAX_SIZE = 30;

class Stack {
     constructor () {
          this.list = new Array( MAX_SIZE )
          this.top = -1;

     }

     push ( item ) {
          if ( this.top >= MAX_SIZE ) {
               console.log( 'Stack overflow' );
               return false;
          }

          this.list[ ++this.top ] = item;
          return true;
          
     }

     pop () {

          if ( this.isEmpty() ) {
               console.log( 'Stack Underflow' );
               return false;
          }
          let item = this.list[ this.top ]
          delete this.list[ this.top ]
          this.top--;
          return item;

      }
     
     peek () { 

          if ( isEmpty() ) {
               console.log( 'Stack Underflow' );
               return false;
          }

          return this.list[ this.top ] 
          

     }

     isEmpty () {
          return this.top < 0
     }
}

const stack = new Stack();

for ( let i = 0; i < MAX_SIZE; i++ ) {
     stack.push( i + 1 );

}

console.log( stack );

let arr = [];

for ( let i = 0; i < MAX_SIZE; i++ ) {
     
     arr[i] = stack.pop();
}

console.log(arr);