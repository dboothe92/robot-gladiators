var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    //Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

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
};

fight();