//Game States
//'WIN' - Player has defeated all enemy-robots
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//'LOSE' - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 99;

var fight = function(enemyName) {
    //Repeat and execute as long as enemy is still alive
    while (enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT  or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

          //if player chooses to skip
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if true, leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney ", playerMoney);
                break;
            }
        }
            /*Subtract value of'playerAttack' from the value of 'enemyHealth' and use that result to 
            update the value in 'enemyHealth' variable*/
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                );

            //Check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.")
            }

            /*Subtract value of'enemyAttack' from the value of 'playerHealth' and use that result to 
            update the value in 'playerHealth' variable*/
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //Chaeck players health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health remaining.");
            }
        } 
    };    


for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
        window.alert("welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    } else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
} 