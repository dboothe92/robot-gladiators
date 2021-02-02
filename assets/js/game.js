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
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT  or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //If player chooses to fight, fight
    if (promptFight === 'fight' || promptFight === 'FIGHT') {
        /*Subtract value of'playerAttack' from the value of 'enemyHealth' and use that result to 
        update the value in 'enemyHealth' variable*/
        enemyHealth = enemyHealth - playerAttack;

        //log a resulting message to the console to know that it worked
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        /*Subtract value of'enemyAttack' from the value of 'playerHealth' and use that result to 
        update the value in 'playerHealth' variable*/
        playerHealth = playerHealth - enemyAttack;

        //log a resulting message to the console to know that it worked
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        //Chaeck players health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }
    
    //if player chooses to skip
    } else if (promptFight === 'skip' || promptFight === 'SKIP') {
        //Confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            var playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    }else {
        window.alert("You need to choose a valid option. try Again!");
    }
    
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}