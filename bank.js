//banking assignment - to loop 4 functions of withdraw deposit view quit /WDVQ loop
//to display welcome greeting and user balance

// function showMessage() {
//     var initBalance = 100000 * 1;
//     alert('Welcome to Norton Bank!');
//     alert('You authorized us to show your balance next? [username and password]');
//     alert('Your available balance is US$'+ initBalance);
//     }

//     showMessage();
    
// prompt user to select an action from a given set of command displayed to user
// 1 to withdraw / 2 to deposit/ 3 to view balance/ 4 to quit

let userInput = Number (prompt('Please enter a number. 1 for withdrawal, 2 for deposit, 3 to view your balance or 4 to quit'));
switch (userInput) {
    case 1:
        alert('You have selected to make a withdrawal');
        break;
    case 2:
        alert('You have selected to place a deposit');
        break;
    case 3:
        alert('You have selected to view your balance');
        break;
    case 4:
        alert('You have selected to quit');
        break;
    default:
        alert('Please select a number between 1 to 4.');
}

// user to deposit and show new balance
// WIP:  50k cap daily limit??

function deposit() {
    alert('Please be advised that a deposit is subject to $50,000 daily limit imposed by Federal Reserve Regulation FED101')
    let deposit = prompt('enter the amount for your deposit');
    
    let initBalance = 100000;
    let maxDeposit = 50000;
    let newBalance;
    
    newBalance = parseInt(initBalance) + parseInt(deposit);
    
    alert('Your new total balance is '+ newBalance);
    }

// user to withdraw (must leave 300 remaining in the account and show new balance

function withdrawal() {
    let withdrawal = prompt ('enter the amount you would like to withdraw');
    let initBalance = 100000;
    let availBalance = initBalance - 300;
    let endingBalance;

    endingBalance = parseInt(initBalance) - parseInt(withdrawal);

    if (availBalance >= withdrawal) {
        alert('Your withdrawal is succesfull. Your new balance is '+ endingBalance)
    } else alert('Your withdrawal is unsuccessful due to possibly insufficient fund. Please try again for a smaller amount');
}

// to display initial balance to user

function view() {
    let initBalance = 100000;
    let availBalance = 100000-300;

    alert('Your balance is US$'+ initBalance+ '. You have US$'+ availBalance + ' available for withdrawal today.' )
}

// if user to quit 
function quit() {
    alert('Thank you for your business');
}
