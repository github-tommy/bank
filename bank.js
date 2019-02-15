// to show welcome greeting:

// alert('Welcome to Norton Bank!');

function deposit() {

let deposit = prompt('enter the amount you plan to deposit');

// max 50000?

let initialBalance = (0).toString();
let totalBalance;

totalBalance = (initialBalance + deposit);

alert('Your new total balance is '+ totalBalance);
}


// function withdrawal() {
//     let withdrawal = prompt ('enter the withdrawal amount');
//     let initialBalance = ??;
//     let postWithdrawalBalance = initialBalance - withdrawal;
//     for(let withdrawal =< initialBalance) {
//         alert('your withdrawal is accepted. Your new balance is now '+ postWithdrawalBalance+ '. Thank you')
//     } else alert('insufficient balance');
// }
