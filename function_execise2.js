function waitThenRun(greetings, callback){
    setTimeout(function(){
      var response = greetings + "Goodbye!";
      callback(response);
    },1500);
  }// took some inspiration from google and found not the same but similar example...
  
  
  
  function getResults(results){
    console.log(results);
  }
  
  waitThenRun("Hello!", getResults)



  //solution 2--------

  function waitThenRun(delay) {
    setTimeout(delay, 1500);
}

function greetings() {
    console.log("Hello! and Goodbye! Can't wait this long. Sorry!!");
}

waitThenRun(greetings);