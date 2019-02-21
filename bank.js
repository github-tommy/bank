//banking assignment - Do a while WDVQ loop
// Alert user balance and available balance to wdraw - net of 300$ min required to keep ==================================

let quit = false;
let bal = 1000;
let balAvailable = bal - 300;

alert('Your available balance is US$'+ bal + '. You may withdraw up to US$'+ balAvailable);

//user can quit anytime if Q is selected.

while(quit === false) {
    let input = prompt ("Enter your command: 'W' for withdrawal, 'D' for deposit, 'V' for view' or 'Q' for quit in Capital Letter");

      if (input === 'Q') {
    quit = true;
} 

// user can withdraw up balance - 300 min to keep in account

else if (input === 'W') {
    var withdrawal;
    var withdrawal = prompt('enter the amount you would like to withdraw');
    var runningBal;

    if (parseInt(withdrawal) <= (parseInt(bal) -300)) {

    runningBal = bal - withdrawal;
    
    alert('Your withdrawal is successful. Your new balance is' + runningBal);
    
    } else (alert('Insufficient fund. You may try again for a smaller amount. A minimum balance of US$300 is required by Norton Bank at all times.'));
}

//user can deposit up t0 50k per transaction

else if(input === 'D') {
    var deposit;
    var deposit = prompt('enter the amount you would like to deposit');
    var runningBal;

    if (parseInt(deposit) <= 50000) {
        
        runningBal = parseInt(runningBal) + parseInt(deposit);

        alert('Your deposit is accepted. Your new balance is '+ runningBal);
    
    } else alert('Your deposit is not accepted. Please try again for a smaller amount. A deposit is subject to a maximum of US$50k per transaction.');
}

//to alert user low balance 1k - to top up

else if(input ==='V') {
    var view;

    if (runningBal<1001) {
        alert('Reminder to top up your balance.')
    }

    alert('Your balance is '+ parseInt(runningBal));
    }
}
