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
var abc = this; // we want to use this variable in embedded functions

function xyz(){
  // "this" is different here! --- but we don't care!
  console.log(abc); // now it is the right object!
  function qwe(){
    // "this" is different here too! --- but we don't care!
    console.log(abc); // it is the right object here too!
  }

};


// Normally the main reason for using this approach is to make the current this available to subfunctions or closures. For example:

var myObject = {
  param: 123,
  method: function(){
    alert( this.param );
  },
  method2: function(){
    setTimeout(function(){
      alert( this.param );
    },100);
  }
}

//https://stackoverflow.com/questions/17163248/whats-the-advantage-of-using-var-self-this-in-knockout-js-view-models

var obj = {
  outerFunction: function() {
    console.log(this == obj);

    function innerFunction() {
      console.log(this == obj)
    }
    return innerFunction;
  }
}

var obj = {
  outerFunction: function() {
    var innerFunction = () => {
      console.log(this == obj);
    }
    return innerFunction;
  }
  
}