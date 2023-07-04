//    Eventloop in JavaSript

    // For example in JS:

// This statement is pushed to callstack
    console.log("This a first eventLoop statement");

   // This statement after the expiration of time 
   //  it will push to the Queue.
    setTimeout(function(){
        console.log("This is 2nd statement of eventLoop")
    }, 2500);


// This statement is also pushed to callstack
    console.log("This is 3rd statement of eventLoop")