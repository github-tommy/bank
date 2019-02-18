//banking assignment - to loop 4 functions of withdraw deposit view quit /WDVQ loop
// ====================================================================================
// declare a balance and boolean continue or quit? ==================================

var bal = 1000;
alert('Your available balance is US$'+ bal);

function userResponse() {
    quit = 2;
    userResponse = prompt('enter 1 to continue or 2 to quit');
    if (userResponse == 2) {
      alert('goodbye');
    } else 
    var withdraw = 1;
    var deposit = 2;
    var view = 3;
    var x = 1;
    while(x<4) {
        (prompt('enter 1 to withdraw, 2 to deposit, 3 to view balance'));
        x++;
        var bal = 1000;
        var withdrawal = prompt('enter the amount you would like to withdraw');
        var balEnding;
        balEnding = bal - withdrawal;

        if (bal >= withdrawal) {
            alert('successful. your new balance is '+ balEnding);
        } else alert('unsuccessful');

        var deposit = prompt('enter amount you would like to deposit');
        var balEnding;
    
        var balEnding = parseInt(balEnding) + parseInt(deposit);

        alert('thank you. your new balance is '+ balEnding);
        
        view = alert('your balance is '+ balEnding);
    }
   
    // function withdrawal() {
//     let withdrawal = prompt ('enter the amount you would like to withdraw');
//     let initBalance = 100000;
//     let availBalance = initBalance - 300;
//     let endingBalance;

//     endingBalance = parseInt(initBalance) - parseInt(withdrawal);

//     if (availBalance >= withdrawal) {
//         alert('Your withdrawal is succesfull. Your new balance is '+ endingBalance)
//     } else alert('Your withdrawal is unsuccessful due to possibly insufficient fund. Please try again for a smaller amount');
// }

    
    }



// view balance/deposit/withdraw? use while loop?



    
// prompt user to select an action from a given set of command displayed to user
// 1 to withdraw / 2 to deposit/ 3 to view balance/ 4 to quit

// let userInput = Number (prompt('Please enter a number. 1 for withdrawal, 2 for deposit, 3 to view your balance or 4 to quit'));
// switch (userInput) {
//     case 1:
//         alert('You have selected to make a withdrawal');
//         break;
//     case 2:
//         alert('You have selected to place a deposit');
//         break;
//     case 3:
//         alert('You have selected to view your balance');
//         break;
//     case 4:
//         alert('You have selected to quit');
//         break;
//     default:
//         alert('Please select a number between 1 to 4.');
// }

// user to deposit and show new balance
// WIP:  50k cap daily limit??

// function deposit() {
//     alert('Please be advised that a deposit is subject to $50,000 daily limit imposed by Federal Reserve Regulation FED101')
//     let deposit = prompt('enter the amount for your deposit');
    
//     let initBalance = 100000;
//     let maxDeposit = 50000;
//     let newBalance;
    
//     newBalance = parseInt(initBalance) + parseInt(deposit);
    
//     alert('Your new total balance is '+ newBalance);
//     }

// user to withdraw (must leave 300 remaining in the account and show new balance

// function withdrawal() {
//     let withdrawal = prompt ('enter the amount you would like to withdraw');
//     let initBalance = 100000;
//     let availBalance = initBalance - 300;
//     let endingBalance;

//     endingBalance = parseInt(initBalance) - parseInt(withdrawal);

//     if (availBalance >= withdrawal) {
//         alert('Your withdrawal is succesfull. Your new balance is '+ endingBalance)
//     } else alert('Your withdrawal is unsuccessful due to possibly insufficient fund. Please try again for a smaller amount');
// }

// // to display initial balance to user

// function view() {
//     let initBalance = 100000;
//     let availBalance = 100000-300;

//     alert('Your balance is US$'+ initBalance+ '. You have US$'+ availBalance + ' available for withdrawal today.' )
// }

// // if user to quit 
// function quit() {
//     alert('Thank you for your business');
// }
