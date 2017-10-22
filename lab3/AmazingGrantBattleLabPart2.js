
  var userHealthPoints = 20;
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
      return 0;
    }
  }

  // returns 1, 2, 3, 4, 5
  function getDamage(){
    return Math.floor(Math.random()*5 +1);
  }
  
  function startCombat(){
    var continueCombat = prompt("Do you want to keep fighting? Y or N");
    if (continueCombat.toUpperCase() === "Y"){
      return true;
    }
    else{
      console.log("you chickened out!");
      return false;
    }
  }
  

 if (startGame()){ 
   
    do{
      doBattle = 1;
        while( userHealthPoints >0 && grantHealthPoints >0 && doBattle){
          //battle rages on, decides who is the winner
          var randomNum = Math.random();
          var damageDealt = getDamage();
        
          if (randomNum <0.5){
            // Grant loses
            grantHealthPoints -= damageDealt;
            console.log("AmazingGrant has " + grantHealthPoints+ " health points.");
          }
          else{
            //user loses
              userHealthPoints -= damageDealt;
                console.log(userName + " has " + userHealthPoints+ " health points.");
          }
          console.log("continue?");
          doBattle = startCombat();
        }
        
      if (userHealthPoints === 0) {
        //game over
        console.log(userName + " won " + userWins + " battles but lost the war. AmazingGrant is the victor!");
        break;
      }
      else{
        userWins++;
        grantHealthPoints = 10;
      }
      if (userWins < 3)
      console.log(userName + " has " + userWins + " win(s)!");
      else{
            console.log(userName + " has won the WAR!");
      }
    }
    while(userWins < 3);
  }
