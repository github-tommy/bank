//banking assignment - to loop 4 functions of withdraw deposit view quit /WDVQ loop
// ====================================================================================
// declare a balance and while loop? ==================================

let quit = false;
let bal = 1000;
alert('Your available balance is US$'+ bal);

while(quit === false) {
    let input = prompt ("enter your command: 'w' for withdrawal, 'd' for deposit, 'v' for view' or 'q' for quit");
  
      if (input === 'q') {
    quit = true;
} 
else if (input === 'w') {
    var withdrawal;
    var withdrawal = prompt('enter the amount you would like to withdraw');
    var balEnding;

    balEnding = bal - withdrawal;

    alert('Your withdrawal is successfull. Your new balance is US$'+ balEnding);
}
else if(input === 'd') {
    var deposit;
    var deposit = prompt('enter the amount you would like to deposit');
    var balEnding;

    balEnding = parseInt(balEnding) + parseInt(deposit);

    alert('Your deposit has been accepted. Your new balance is US$ '+ balEnding)
}
else if(input ==='v') {
    var view;
    var balEnding;

    alert('Your balance is '+ balEnding);
}
 }
