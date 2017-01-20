$(function(){

//BACK LOGIC GOES HERE

  //Global Scope Variables

  var userNumber = 10;

  //STEP1: given userInput, check if it is a number
    //if True: userInput was NOT number: return error sentence

  var checkIfNotNumber = function(){
    if(isNaN(userNumber)){
      alert("Please Type Nunber");
    }else{
      alert("Number"); //for Debug
      //if TRUE  userInput was number: follow STEP2
    };
  };

  checkIfNotNumber();






  //STEP2: given Usernumber, output the array
  var convertToArray = function(userNumber){

    var userNumberArray = [];
    for(var i = 0; i < userNumber; i++){
      userNumberArray[i] = i + 1;
    }
    alert(userNumberArray);
  };

  convertToArray(userNumber);






  //STEP3: given the array, replace the specific numbers of array to according words;
  //using for-loop and when if you found either 15 or 5 or 3, replace
    //[1, 2, ping, 4, pong, ping, 7, 8, ping, pong,.....14, ping-pong]

  //STEP4: Display the Array (using for-loop)


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
