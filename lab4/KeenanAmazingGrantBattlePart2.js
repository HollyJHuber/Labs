//Initialize global variables
var userHealthPoints = 40;
var grantHealthPoints = 10;
var userWins = 0;
var gameOn;
var userName;
var doBattle;
//Function to return integer 1,2,3,4,5
function getDamage() {
  return Math.floor(Math.random()*5 + 1);
}
//Prompt user for input to play game and user name
function startGame() {
  var wantToPlay = prompt("Do you want to challenge the mighty Grant Chirpus? Y or N");
  
  if (wantToPlay.toUpperCase() === "Y") {
   userName = prompt("What is your name, gladiator?");
   return true;
}
  else {
  return false;
  }
}
function startCombat() {
   var continueCombat = prompt("Do you want to continue to fight against the mighty Grant Chirpus? Y or N");
  
  if (continueCombat.toUpperCase() === "Y") {
   return true;
}
  else {
    console.log("What a chicken! Bwaaaaak!");
  return false;
  }
}
if (startGame()) {
  
//Game continues until Grant Circus has been defeated 3 times. 
do {
  doBattle = 1;
  //Each battle takes place while both characters are still alive
while (userHealthPoints > 0 && grantHealthPoints > 0 && doBattle) {
  
  //Checks who takes damage and decrements HP accordingly. 
  var randomNum = Math.random(0,1);
  var damageDealt = getDamage();
  
  if (randomNum > .5) {
    userHealthPoints -= damageDealt;
    console.log(userName + " has " + userHealthPoints + " HP");
  }
  else {
    grantHealthPoints -= damageDealt;
    console.log("The Mighty Grant Chirpus has " + grantHealthPoints + " HP");
  }
  
  doBattle = startCombat();
  
}
//Breaks out of while loop when one player has reached 0 HP
//Checks user to see if GAME OVER
if(userHealthPoints === 0) {
  console.log("\r" + "You won " + userWins + " against the invincible Grant Chirpus but have lost the war.");
  break;
}
else if (userHealthPoints > 0 && !doBattle) {
  console.log("You ran away from your fight with Grant Chirpus. Game Over.");
  break;
}
//If user did not die, give them 1 more vistory and reset Grant's HP to 10
else {
  console.log("Congratulations, hero, you have defeated the indefatigueable Grant Chirpus " + userWins + " times.");
  userWins++;
  grantHealthPoints = 10;
  }
}
while (userWins < 3 && doBattle);
//AS soon as 3 wins achived, breaks the loop and displays final message.
if (userWins == 3) {
  console.log(userName + ", you have slain Grant 'apparently-not-as-strong-as-we-thought' Chirpus once and for all!");
  }
}
//If user doesn't want to fight, display taunt
else {
  console.log("What a little chicken.")
}