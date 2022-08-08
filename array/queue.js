const MAX_SIZE = 30;

class Queue {
     constructor () {
          this.front = 0;
          this.rear = 0;
          this.queue = new Array( MAX_SIZE ); 
          
     }

     enqueue ( item ) {
          if ( this.rear === MAX_SIZE ) {
               console.log( 'Queue is full' );
               return false;
          }

          this.queue[this.rear++] = item;

     }

     dequeue ( ) {
         if ( this.isEmpty() ) {
               console.log( 'Queue is Empty' );
                return;
           }

          for ( let i = this.front; i < this.rear - 1; i++ ) {
               this.queue[i] = this.queue[i+1]
          }
          delete this.queue[ --this.rear ];
          return;
     }

     showQueue (  ) {
          if ( this.isEmpty() ) {
               console.log( 'Queue is Empty' );
                return;
           }
          
          for ( let i = this.front; i < this.rear; i++ ) {
               console.log(this.queue[i]);
          }
     }
     next () {
           if ( this.isEmpty() ) {
               console.log( 'Queue is Empty' );
                return;
           }
          return this.queue[this.front]
     }

     isEmpty () {
          
          return this.front === this.rear
     }
}



const myQueue = new Queue();

myQueue.enqueue('one')
myQueue.enqueue('two')
myQueue.enqueue( 'three' )
myQueue.enqueue( 'four' )

myQueue.dequeue()
myQueue.dequeue()
myQueue.showQueue()