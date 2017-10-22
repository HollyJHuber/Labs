
  var userHealthPoints = 40;
  var grantHealthPoints = 10;
  var userWins = 0;
  var userName;
  var doBattle;
  
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

  // returns 1, 2, 3, 4, 5
  function getDamage(){
    return Math.floor(Math.random()*5 +1);
  }
  
  function continueCombat(){
    var keepFighting = prompt("Do you want to attack [Y] or quit [N]?");
    if (keepFighting.toUpperCase() === "Y"){
      return true;
    }
    else{
      //console.log("you chickened out!");
      return false;
    }
  }
  
 if (startGame()){ 
   
    do{
      //DEBUG
      // console.log("doBattle: " + doBattle);
      
      doBattle = true;
        while( userHealthPoints >0 && grantHealthPoints >0 && doBattle){
          //battle rages on, decides who is the winner
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
          
          // DEBUG
          // console.log("Grant: "+ grantHealthPoints +", " + userName + ": " + userHealthPoints + ", continue?");
           
           doBattle = continueCombat();
        }
        
      if (userHealthPoints < 1) {
        //game over
        console.log(userName + " won " + userWins + " battles but lost the war. AmazingGrant is the victor!");
        break;
      } else if (userHealthPoints > 0 && !doBattle){
        console.log("You have chosen to stop the fight. Game Over!");
        break;
      }
      else{
        console.log(userName + " has " + userWins + " win(s)!");
        userWins++;
        grantHealthPoints = 10;
      }
    }
    while(userWins < 3 && doBattle);
    if (userWins === 3){
      console.log(userName + " has " + userWins + " wins and has emerged victorious!");
    }
  }
