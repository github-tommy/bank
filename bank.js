//banking assignment - Do a while WDVQ loop

let quit = false;
let bal = 1000;

// Alert user balance and available balance to wdraw - net of 300$ min required to keep ==================================

alert('Welcom to Norton Bank. Your balance is US$'+ bal + '.');

//user can quit anytime if Q is selected.

while(quit === false) {
    let input = prompt ("Enter your command: \n'W' for withdrawal, \n'D' for deposit, \n'V' for view' or \n'Q' for quit in Capital Letter");

      if (input === 'Q') {
    quit = true;
} 

// user can withdraw up balance - alert and confirm if bal <300

else if (input === 'W') {
    var withdrawal;
    var withdrawal = prompt('enter the amount you would like to withdraw');
    var runningBal;
    let proceed = true;

    if (parseInt(withdrawal) <= (parseInt(bal) -300)) {

    runningBal = bal - withdrawal;
    
    alert('Your withdrawal is successful. Your new balance is ' + runningBal);
    
    } else prompt('please confirm to proceed. 1 for yes, 2 for no');
    if (input === 1) {
        proceed = true;
    }
}

//user can deposit up t0 50k per transaction

else if(input === 'D') {
    var deposit;
    var deposit = prompt('enter the amount you would like to deposit');
    var runningBal;

    if (parseInt(deposit) <= 50000) {
        
        runningBal = parseInt(bal) + parseInt(deposit);

        alert('Your deposit is accepted. Your new balance is '+ runningBal);
    
    } else alert('Your deposit is not accepted. Please try again for a smaller amount. A deposit is subject to a maximum of US$50k per transaction.');
}

//to alert user low balance 1k - to top up

else if(input ==='V') {
    var view;

    if (bal<1001) {
        alert('Reminder to top up your balance.')
    }

    alert('Your balance is '+ bal);
}
}
