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
}
