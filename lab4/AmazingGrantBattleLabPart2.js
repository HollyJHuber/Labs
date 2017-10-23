// initialize variables

  var userHealthPoints = 40;
  var grantHealthPoints = 10;
  var userWins = 0;
  var userName;
  var doBattle;
  var maximumWins = 3;

// prompt user to play game & enter userName
  function startGame(){
    var wantToPlay = prompt("Do you want to play a game? Y or N");
    if (wantToPlay.toUpperCase() === "Y"){
      userName = prompt("Enter your name please:");
      return true;
    }
    else{
      console.log("what the hell is wrong with you?");
      return false;
    }
  }

  // returns 1, 2, 3, 4, or 5
  function getDamage(){
    return Math.floor(Math.random()*5 +1);
  }
  
  function continueCombat(){ 
    var keepFighting = prompt("Do you want to attack [Y] or quit [N]?");
    if (keepFighting.toUpperCase() === "Y"){
      return true;
    }
    else{
      return false;
    }
  }

 if (startGame()){ 
   // game continues until AmazingGrant has been defeated maximumWins times

    do{
      doBattle = true;
      // each battle takes place while both characters are still alive
        while( userHealthPoints > 0 && grantHealthPoints > 0 && doBattle){
          
          // checks who takes damage and decrement HealthPoints accordingly
          var randomNum = Math.random();
          var damageDealt = getDamage();
        
          if (randomNum > 0.5){
            userHealthPoints -= damageDealt;  
            console.log(userName + " has " + userHealthPoints+ " health points.");

          }
          else{
            grantHealthPoints -= damageDealt;
            console.log("AmazingGrant has " + grantHealthPoints+ " health points.");
          }

           doBattle = continueCombat();
        }
              
      // breaks out of while loop when one player has reached <1 HealthPoints
      // checks if user has chosen to quit  
      if (userHealthPoints < 1) {
        //game over
        console.log(userName + " won " + userWins + " battles but lost the war. AmazingGrant is the victor!");
        break;
      } else if (userHealthPoints > 0 && !doBattle){
        console.log("You have chosen to stop the fight. Game Over!");
        break;
      }
      else{
        // if user is still alive, they score one more victory and reset grantHealthPoints
        userWins++;
        console.log(userName + " has won!");
        grantHealthPoints = 10;
      }
    }
    while(userWins < maximumWins && doBattle);
    // when maximumWins is achieved, break the loop and display final message
    if (userWins === maximumWins){
      console.log(userName + " has emerged victorious! Game over.");
    }
  }