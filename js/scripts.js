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
      $("#show-results ul").append("<li>Please Type Number :( </li>");
    };
  };

  //STEP2: given Usernumber, output the array
  var convertToArray = function(){
    for(var i = 0; i < userNumber; i++){
      userNumberArray[i] = i + 1;
    }
  };



  //STEP3: given the array, replace the specific numbers of array to according words

  var replaceWords = function(){
    for(var i = 0; i < userNumberArray.length; i++){

      if(userNumberArray[i] === 42){
        userNumberArray[i] = '<a href="https://en.wikipedia.org/wiki/42_(number)#The_Hitchhiker.27s_Guide_to_the_Galaxy" id="forty-two">42: Answer to the Ultimate Question of Life, the Universe and Everything</a>';
      }else if(userNumberArray[i] % 15 === 0){
        userNumberArray[i] = "<span class='fifteen'>Ping-Pong</span>";

      }else if(userNumberArray[i] % 5 === 0){
        userNumberArray[i] = "<span class='five'>Pong</span>";

      }else if(userNumberArray[i] % 3 === 0){
        userNumberArray[i] = "<span class='three'>Ping</span>";

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


  var mnuTimeout = null;
    $("footer").mouseenter(function(){
       clearTimeout(mnuTimeout);
       mnuTimeout = setTimeout(function(){$('#pageFooterContent').animate({height: '250'}, 1000); },2000);
    });

    $("footer").mouseleave(function(){
       clearTimeout(mnuTimeout);
       mnuTimeout = setTimeout(function(){$('#pageFooterContent').animate({height: '0'}, 1000); },2000);
    });








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
    $("#show-results").show()


    userNumberArray.forEach(function(userNumberArray){
      $("#show-results ul").append("<li>" + userNumberArray + "</li>");
    });
    event.preventDefault();
  });
});
