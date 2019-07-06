function xyz(){
  // "this" is different here!
  console.log(this); // not what we wanted!
  function qwe(){
    // "this" is different here too!
    console.log(this); // not what we wanted!
  }

};


// This question is not specific to jQuery, but specific to JavaScript in general. The core problem is how to "channel" a variable in embedded functions. This is the example:

var abc = 1; // we want to use this variable in embedded functions

function xyz(){
  console.log(abc); // it is available here!
  function qwe(){
    console.log(abc); // it is available here too!
  }

};