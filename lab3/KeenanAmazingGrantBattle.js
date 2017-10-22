//Initialize global variables
var userHealthPoints = 40;
var grantHealthPoints = 10;
var userWins = 0;

//Prompt user for input to ply game and user name
var wantToPlay = prompt("Do you want to challenge the mighty Grant Chirpus? Y or N");
if (wantToPlay.toUpperCase() === "Y") {
  var userName = prompt("What is your name, gladiator?");
  
//Game continues until Grant Circus has been defeated 3 times. 
while (userWins < 3) {
  
  //Each battle takes place while both characters are still alive
while (userHealthPoints > 0 && grantHealthPoints > 0) {
  
  //Checks who takes damage and decrements HP accordingly. 
  var hitCheck = Math.random(0,1);
  
  if (hitCheck > .5) {
    userHealthPoints -= 1;
    console.log(userName + " has " + userHealthPoints + " HP");
  }
  else {
    grantHealthPoints -= 1;
    console.log("The Mighty Grant Chirpus has " + grantHealthPoints + " HP");
  }
}

//Breaks out of while loop when one player has reached 0 HP
//Checks user to see if GAME OVER
if(userHealthPoints === 0) {
  console.log("\r" + "You won " + userWins + " against the invincible Grant Chirpus but have lost the war.");
  break;
}

//If user did not die, give them 1 more vistory and reset Grant's HP to 10
else {
  userWins++;
  console.log("Congratulations, hero, you have defeated the indefatigueable Grant Chirpus " + userWins + " times.");
  grantHealthPoints = 10;
  }

}
//AS soon as 3 wins achived, breaks the loop and displays final message.
if (userWins == 3) {
  console.log(userName + ", you have slain Grant 'apparently-not-as-strong-as-we-thought' Chirpus once and for all!");
  }
}

//If user doesn't want to fight, display taunt
else {
  console.log("What a little chicken.")
}