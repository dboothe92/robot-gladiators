var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


//Function to fight the robots
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
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney ", playerMoney);
                break;
            }
        }
        /*Subtract value of'playerAttack' from the value of 'enemyHealth' and use that result to 
        update the value in 'enemyHealth' variable*/
        var damage = randomNumber(playerAttack - 3, playerAttack);

        enemyHealth = Math.max(0, enemyHealth - damage);
        console.log(damage);
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

        //Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        } else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }

        /*Subtract value of'enemyAttack' from the value of 'playerHealth' and use that result to 
        update the value in 'playerHealth' variable*/
        var damage = randomNumber(enemyAttack - 3, enemyAttack);

        playerHealth = Math.max(0, playerHealth - damage);
        console.log(damage);
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


//Start a New Game
var startGame = function (){
    //reset stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney= 10;
    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyName = enemyNames[i];
            enemyHealth = randomNumber(40, 60);
            fight(pickedEnemyName);
            //Asking to go to the store
            if (playerHealth > 0 && i < enemyNames.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round? You currently have " + playerMoney + " points to spend.");
                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    //play again
    endGame();
};

//function showing endgame options
var endGame = function() {
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! you now have a score of :" + playerMoney);
    } else {
        window.alert("You've lost your robot in battle.");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm) {
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

//function creating shop
var shop = function() {
    var shopOptionsPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE' or 'LEAVE; to make a choice.");
    switch (shopOptionsPrompt) {
        case "REFILL":
        case "Refill":
        case "refill":
            if (playerMoney >= 7) {
                window.alert("Refilling player's health by 20 for 7 points.");
                //Increases health and decreases money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
            } else {
                windows.alert("You don't have enough points!");
            }
            break;
        
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            if (playerMoney >= 7) {
                window.alert("Upgrading player's attack by 6 for 7 points");
                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("you don't have enough points!");
            }
            break;
            
        case "LEAVE":
        case "Leave":
        case "leave":
            window.alert("Leaving the store.");
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

//function to generate a random number
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

startGame();