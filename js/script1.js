'use strict';

var userName = prompt('Please Type your name ');
console.log('this is the user name '+ userName);

confirm('welcome '+userName+' please press okay button to start the questions and consider to answer with Yes / No');
var university = 'yes';
var typeOfStudy = 'yes';
var myAge = 'yes';
var doILikeMeat = 'yes' ;
var sport = 'yes';

function ques1(){
  var userAnswer1 = prompt('do i like meat ? ');

  if(userAnswer1.toLocaleLowerCase() === doILikeMeat){
    alert('correct answer ' + userName);
    console.log('user answer was ' + userAnswer1);
  } else{
    alert('worng answer ' + userName);
  }
}
ques1();

function ques2(){
  var userAnswer2 = prompt(' the name of my universty was isra ?');

  if(userAnswer2.toLocaleLowerCase() === university ){
    alert('correct answer ' + userName);
    console.log('user answer was ' + userAnswer2);
  } else{
    alert('worng answer ' + userName);
  }
}
ques2();

function ques3(){
  var userAnswer3 = prompt('am i 30 years old  ?');

  if(userAnswer3.toLocaleLowerCase() === myAge){
    alert('correct answer ' + userName);
    console.log('user answer was ' + userAnswer3);
  } else{
    alert('worng answer ' + userName);
  }
}
ques3();


function ques4(){

  var userAnswer4 = prompt('do i like to swim ?');

  if(userAnswer4.toLocaleLowerCase() === sport){
    alert('correct answer ' + userName);
    console.log('user answer was ' + userAnswer4);
  } else{
    alert('worng answer ' + userName);
  }
}
ques4();

function ques5(){

  var userAnswer5 = prompt('did i studied software engineering ?');

  if(userAnswer5.toLocaleLowerCase() === typeOfStudy){
    alert('correct answer ' + userName);
    console.log('user answer was ' + userAnswer5);
  } else{
    alert('worng answer ' + userName);
  }
}
ques5();
