$(function(){

//BACK LOGIC GOES HERE

  //Global Scope Variables

  var userNumber = 24;
  var userNumberArray = [];

  //STEP1: given userInput, check if it is a number
    //if True: userInput was NOT number: return error sentence

  var checkIfNotNumber = function(){
    if(isNaN(userNumber)){
      alert("Please Type Nunber");
    }else{

      //if TRUE  userInput was number: follow STEP2
    };
  };

  checkIfNotNumber();






  //STEP2: given Usernumber, output the array
  var convertToArray = function(){
    for(var i = 0; i < userNumber; i++){
      userNumberArray[i] = i + 1;
    }
    alert(userNumberArray);
  };

  convertToArray();






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
      alert(userNumberArray);
    };

    replaceWords();



  //STEP4: Display the Array (using for-loop)

  var showResult = function(){
    userNumberArray.forEach(function(userNumberArray){
      alert("Result:" + userNumberArray);
    });
  }
  showResult();


//FRONT LOGIC GOES HERE

  //Implement tryagain (previous output disappeared and user can try again)

  //get the userInput

  //call func STEP1

  //call func STEP2

  //call func STEP3

  //Call func Step4 Display:: show the result of the array
  //"<li>" + "</li>""

  ///If I finished early,
  //show number and ping-pong words, gradually!!
  //ping-pong, animation and color!!
});
