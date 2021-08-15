// handle deposit event
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal

    //update account balance

    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalaceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear the deposit input field
    depositInput.value = '';
});


// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    // console.log('withdra-click');
    const widthdrawInput = document.getElementById('withdraw-input');
    const widthdrawAmountText = widthdrawInput.value;
    const newWidthdrawAmount = parseFloat(widthdrawAmountText);
    // console.log(widthdrawAmountText);


    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const perviousWithdrawText = withdrawTotal.innerText;
    const perviousWithdrawTotal = parseFloat(perviousWithdrawText);

    const newWidthdrawTotal = perviousWithdrawTotal + newWidthdrawAmount;
    withdrawTotal.innerText = newWidthdrawTotal;


    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalaceText = balanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBalaceText);
    const newBalanceTotal = previousBlanceTotal - newWidthdrawTotal;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input

    widthdrawInput.value = '';

})



