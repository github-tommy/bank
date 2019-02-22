//run the bank app - Do a while WDVQ loop
let input = '';
let balance = 1000; 

while (input !== 'Q') {
    
    input = prompt('Welcome to Norton Bank! \nEnter W for Withdrawal, D for Deposit, V for View and Q for Quit. Please use Capital letter.');

    switch(input) {
        case 'W':
            console.log('You entered to Withdraw');
            toWithdraw();
            break;
        case 'D':
            console.log('You entered to Deposit');
            toDeposit();
            break;
        case 'V':
            console.log('You entered to View balance');
            toView();
            break;
        case 'Q':
            console.log('You entered to Quit');
            break;
        default:
            console.log('Please try again your selection.');
            break;
    }

function toWithdraw() {
    let withdrawal = prompt('Enter your withdrawal amount');
  if(withdrawal <= balance) {
    balance -= Number(withdrawal);
    alert(balance);
 } else alert('insufficient balance');
}

function toDeposit() {
    let deposit = prompt('Enter your deposit amount');
  if(deposit <= 50000) {
    balance += Number(deposit);
    alert(balance);
  } else alert('Unsuccessful. Subject to max 50k transaction limit.')
}

function toView() {
    alert(balance);
}
}
