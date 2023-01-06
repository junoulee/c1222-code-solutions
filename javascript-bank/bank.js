/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAccount = new Account(this.nextAccountNumber, holder);
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return this.nextAccountNumber - 1;
  } else return null;
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (number === this.accounts[i].number) {
      return this.accounts[i];
    }
  } return null;
};

Bank.prototype.getTotalAssets = function () {
  var balance = 0;
  if (this.accounts.length === 0) {
    return balance;
  }
  var depositAmount = 0;
  var withdrawAmount = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].transactions[i].type === 'deposit') {
      depositAmount += this.accounts[i].transactions[i].amount;
    } if (this.accounts[i].transactions[i].type === 'withdrawal') {
      withdrawAmount += this.accounts[i].transactions[i].amount;
    }
  }
  balance = depositAmount - withdrawAmount;
  return balance;
};
