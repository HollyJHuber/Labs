var wantToPlay = prompt("Do you want to play a game? Y or N");

if (wantToPlay.toUpperCase() === "Y"){
  var userName = prompt("Enter your name please:");
} else {
   console.log("what the hell is wrong with you?");
}

var userHealthPoints = 40;
var grantHealthPoints = 10;
var userWins = 0;

while(userWins < 3){

  while( userHealthPoints >0 && grantHealthPoints >0){
    //battle rages on
    var randomNum = Math.random(0,1);
  
    if (randomNum <0.5){
      // Grant loses
      grantHealthPoints -= 1;
      console.log("AmazingGrant has " + grantHealthPoints+ " health points.");
    }
    else{
      //user loses
        userHealthPoints -= 1;
          console.log(userName + " has " + userHealthPoints+ " health points.");
    }
    //the round ends
  }
  
  if (userHealthPoints === 0) {
    //game over
    console.log(userName + " won " + userWins + " battles but lost the war. AmazingGrant is the WINNER!");
    break;
  }
  else{
    userWins++;
     grantHealthPoints = 10;
  }
  if (userWins < 3)
   console.log(userName + " has " + userWins + " wins!");
   else{
        console.log(userName + " has won the WAR!");
   }
}
