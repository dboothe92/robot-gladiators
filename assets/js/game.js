//Function to fight the robots
var fight = function(enemy) {
    //Repeat and execute as long as enemy is still alive
    while (enemy.health > 0 && playerInfo.health > 0) {
        var promptFight = window.prompt("Would you like to FIGHT  or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

          //if player chooses to skip
        if (promptFight === 'skip' || promptFight === 'SKIP') {
            //Confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if true, leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money ", playerInfo.money);
                break;
            }
        }
        /*Subtract value of'playerInfo.attack' from the value of 'enemy.health' and use that result to 
        update the value in 'enemy.health' variable*/
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
            );

        //Check enemy health
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        } else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.")
        }

        /*Subtract value of'enemy.attack' from the value of 'playerInfo.health' and use that result to 
        update the value in 'playerInfo.health' variable*/
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );

        //Chaeck players health
        if (playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has died!");
             break;
        } else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health remaining.");
        }
    } 
};   


//Start a New Game
var startGame = function (){
    //reset stats
   playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        if (playerInfo.health > 0) {
            window.alert("welcome to Robot Gladiators! Round " + (i + 1));
            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);
            //Asking to go to the store
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round? You currently have " + playerInfo.money + " points to spend.");
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
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! you now have a score of :" + playerInfo.money);
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
            playerInfo.refillHealth();
            break;
        
        case "UPGRADE":
        case "Upgrade":
        case "upgrade":
            playerInfo.upgradeAttack();
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

//Function to make sure name value is not null
var getPlayerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("What is your robots name");
    }
    console.log("You're robot's name is" + name);
};

//Player object
var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.attack = 10;
        this.money = 10;
    }, 
    refillHealth: function(){
        if (this.money >= 7) {
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough points!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            this.attack =+ 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough points!")
        }
        
    }
};

//Enemy object array
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];

startGame();