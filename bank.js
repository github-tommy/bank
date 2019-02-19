//banking assignment - to loop 4 functions of withdraw deposit view quit /WDVQ loop
// ====================================================================================
// declare a balance and while loop? ==================================

let quit = false;
let bal = 1000;
alert('Your available balance is US$'+ bal);

while(quit === false) {
    let input = prompt ("Enter your command: 'W' for withdrawal, 'D' for deposit, 'V' for view' or 'Q' for quit in Capital Letter");
  
      if (input === 'Q') {
    quit = true;
} 
else if (input === 'W') {
    var withdrawal;
    var withdrawal = prompt('enter the amount you would like to withdraw');
    var balEnding;

    if (parseInt(withdrawal) <= (parseInt(bal) -300)) {

    balEnding = bal - withdrawal;
    
    alert('Your withdrawal is successful. Your new balance is' + balEnding);
    
    } else (alert('Insufficient fund. You may try again for a smaller amount. A minimum balance of US$300 is required by Norton Bank at all times.'));
}

else if(input === 'D') {
    var deposit;
    var deposit = prompt('enter the amount you would like to deposit');
    var balEnding;

    if (parseInt(deposit) <= 50000) {
        
        balEnding = parseInt(bal) + parseInt(deposit);

        alert('Your deposit is accepted. Your new balance is '+ balEnding);
    
    } else alert('Your deposit is not accepted. Please try again for a smaller amount. A deposit is subject to a maximum of US$50k per transaction.');
}

else if(input ==='V') {
    var view;

    if (bal<1001) {
        alert('Reminder to top up your balance.')
    }

    alert('Your balance is '+ parseInt(bal));
}
 }
