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

    balEnding = bal - withdrawal;

    alert('Your withdrawal is successfull. Your new balance is US$'+ balEnding);
}
else if(input === 'D') {
    var deposit;
    var deposit = prompt('enter the amount you would like to deposit');
    var balEnding;

    balEnding = parseInt(balEnding) + parseInt(deposit);

    alert('Your deposit has been accepted. Your new balance is US$ '+ balEnding)
}
else if(input ==='V') {
    var view;
    var balEnding;

    alert('Your balance is '+ balEnding);
}
 }
