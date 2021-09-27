var readlineSync = require ('readline-sync');
var score =0;
function welcomeUser() 
{
var userName = readlineSync.question("What is your name ?");
console.log ("Welcome " + userName + "!" + " Lets Play a quiz on Bahubali!! ");
console.log("Lets find if you are a Bahubali fan..");
}

var questions = [
  {
    question : "Baahubali is originated from which kingdom?: " ,
    answer : "Mahishmati"
  } ,

 {
  question : "Name the sword that Sheikh Alam Khan tries to sell Kattappa: ",
  answer : "Sikander"
 } ,
 {
 question : "What is Kattappa’s complete name?: ",
  answer : "Kalasham Kattapa Nanam"
 } ,
 {
  question : "What is the name of the virtual reality film based on the Baahubali franchise?: ",
  answer : "The Sword of Baahubali"
 } ,
{
  question : "Complete this dialogues from the film, “ Aurat par haath daalne vale ki ungliyaan nahi kaat tey, Kaat tey hai toh____.”:" ,
  answer : "Gala"
}
]

var highScores =
  {
    name : "Devsena",
    score : 5
  } 

function quizPlay(question , answer) {
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() == answer.toUpperCase()){
    console.log ("Right answer !");
    score = score + 1 ;
    console.log ("Score :" + score);
    console.log ("------------");
    
}

else {
  console.log("Oops! wrong answer..");
  console.log ("Score :" + score);
  console.log ("------------");

}
}

function game (){
  for(var i =0 ; i < questions.length ; i ++)
  {
    var currentquestion = questions[i];
    quizPlay(currentquestion.question , currentquestion.answer)
    
  }
}



function scoreCard(){
  console.log ("Your Final score =" + score + " ");
  console.log("**************");
 
}


function topScorer(){
  if (score > highScores.score){
  console.log("Congrats ! You made a high score for this quiz");
 
  }
  else {
    console.log (highScores.name + " " +"is currently leading this quiz with score :"+ highScores.score);
  }
}
welcomeUser();
game();
scoreCard();
topScorer();