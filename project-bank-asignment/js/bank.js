// The deposit program is given below
document.getElementById('deposit-btn').addEventListener('click', function(){
    const newDepositElement = document.getElementById('deposit-field');
    const newDepositMoneyString = newDepositElement.value;


    const newDepositMoney = parseFloat(newDepositMoneyString);
    if (isNaN(newDepositMoney)) {
        newDepositElement.value = "";
        alert('Enter ammount in number!')
        return;
    }
    const depositElement = document.getElementById('depositAmmount');
    const depositMoneyString = depositElement.innerText;
    const depositMoney = parseFloat(depositMoneyString);
    const deposit = depositMoney + newDepositMoney;
    depositElement.innerText = deposit;

    const totalBalanceElement = document.getElementById('balanceAmmount');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const balance = totalBalance + newDepositMoney;
    totalBalanceElement.innerText = balance;
    
    newDepositElement.value = "";

});

document.getElementById('withdraw-btn').addEventListener('click',function(){
    const newWithdrawElement = document.getElementById('withdraw-field');
    const newWithdrawMoneyString = newWithdrawElement.value;
    const newWithdrawMoney = parseFloat(newWithdrawMoneyString);
    if(isNaN(newWithdrawMoney)){
        newWithdrawElement.value = "";
        alert('Enter ammount in number!');
        return;
    }
    const totalBalanceElement = document.getElementById('balanceAmmount');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    if(newWithdrawMoney > totalBalance){
        alert('Your account does not have that much money in balance');
        return;
    }
    const withdrawElement = document.getElementById('withdrawAmmount');
    const withdrawAmmountString = withdrawElement.innerText;
    const withdrawAmmount = parseFloat(withdrawAmmountString);
    const withdraw = withdrawAmmount + newWithdrawMoney;
    withdrawElement.innerText = withdraw;
    const balance = totalBalance - newWithdrawMoney;
    totalBalanceElement.innerText = balance;

    newWithdrawElement.value = "";
})