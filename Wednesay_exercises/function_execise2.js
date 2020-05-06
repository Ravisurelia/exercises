function waitThenRun(greetings, callback){
    setTimeout(function(){
      var response = greetings + "Goodbye!";
      callback(response);
    },1500);
  }
  
  function getResults(results){
    console.log(results);
  }
  
  waitThenRun("Hello!", getResults)