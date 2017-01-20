$(function(){

//BACK LOGIC GOES HERE//////////////////////////////


  //Global Scope Variables
  var userNumber = 0;
  var userNumberArray = [];
  ////////////////////////

  //STEP1: given userInput, check if it is a number
    //if True: userInput was NOT number: return error sentence

  var checkIfNotNumber = function(){
    if(isNaN(userNumber)){
      alert("Please Type Nunber");
    };
  };

  //STEP2: given Usernumber, output the array
  var convertToArray = function(){
    for(var i = 0; i < userNumber; i++){
      userNumberArray[i] = i + 1;
    }
  };








  //STEP3: given the array, replace the specific numbers of array to according words;
  //using for-loop and when if you found either 15 or 5 or 3, replace
    //[1, 2, ping, 4, pong, ping, 7, 8, ping, pong,.....14, ping-pong]

  var replaceWords = function(){
    for(var i = 0; i < userNumberArray.length; i++){

      if(userNumberArray[i] % 15 === 0){
        userNumberArray[i] = "Ping-Pong";

      }else if(userNumberArray[i] % 5 === 0){
        userNumberArray[i] = "Pong";

      }else if(userNumberArray[i] % 3 === 0){
        userNumberArray[i] = "Ping";

      }else{
        //Nothing Happens;
      };
    };
  };

  //STEP4: removed func and moved the program to Front Logic

  //STEP5: RESET the result
  var removeResult = function(){
    userNumberArray = [];
    $("#show-results ul li").remove();
  };

///////BACK END LOGIC ENDS////////////////////////


///////FRONT LOGIC GOES HERE//////////////////////

  $("form#user-number-form").submit(function(event){
    //delete the previous result (STEP5)
    removeResult();

    //get the userInput
    userNumber = parseInt($("input#user-number").val());

    //STEP1
    checkIfNotNumber();

    //STEP2
    convertToArray();

    //STEP3
    replaceWords();

    //show the result of the array (STEP4)
    $("#show-results").show();

    userNumberArray.forEach(function(userNumberArray){
      $("#show-results ul").append("<li>" + userNumberArray + "</li>");
    });

    ///If I finished early,
    //show number and ping-pong words, gradually!!
    //ping-pong, animation and color!!
    event.preventDefault();
  });
});
