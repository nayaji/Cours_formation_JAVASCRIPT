class Transaction {
  constructor(amount) {
      this.amount = amount;
      this.date = new Date();
  }

  toString() {
      return `${this.amount} euros on ${this.date.toLocaleString()}`;
  }
}
// Export the Transaction class
module.exports = Transaction;
