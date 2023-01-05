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
  if (this.transactions.length === 0) {
    return 0;
  } if (this.transactions.length > 0) {
    var valuesArray = [];
    for (var i = 0; i < this.transactions.length; i++) {

      valuesArray.push(Object.values(this.transactions[i]));

    }
    return valuesArray;
  }
};
