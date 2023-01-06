/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];

}

Account.prototype.deposit = function (amount) {
  var depositSlip = new Transaction('deposit', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(depositSlip);
    return true;

  } else return false;

};

Account.prototype.withdraw = function (amount) {
  var withdrawalSlip = new Transaction('withdrawal', amount);
  if (amount > 0 && Number.isInteger(amount)) {
    this.transactions.push(withdrawalSlip);
    return true;

  } else return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  if (this.transactions.length === 0) {
    balance = 0;
  }
  var depositAmount = 0;
  var withdrawAmount = 0;
  var $transactions = this.transactions;
  for (var i = 0; i < $transactions.length; i++) {
    if ($transactions[i].type === 'deposit') {
      depositAmount += $transactions[i].amount;
    } if ($transactions[i].type === 'withdrawal') {
      withdrawAmount += $transactions[i].amount;
    }
  }
  balance = depositAmount - withdrawAmount;
  return balance;
};
