const BankAccount = require('./bankAccount');
const Transaction = require('./transaction');

describe('BankAccount', () => {
  test('should create a BankAccount instance', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    expect(account).toBeInstanceOf(BankAccount);
  });

  test('should deposit money', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    account.deposit(50);
    expect(account.balance).toBe(250);
  });

  test('should withdraw money', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    account.withdraw(50);
    expect(account.balance).toBe(150);
  });

  test('should not create an account with insufficient initial deposit', () => {
    expect(() => new BankAccount('John Doe', 'FR1234567890123456789012345', 50, 'password123')).toThrow();
  });

  test('should hide partial IBAN', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    expect(account.getPartialIban()).toBe('FR12345678901*********345');
  });

  test('should return transactions history with valid password', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    account.deposit(50);
    account.withdraw(30);
    const transactionsHistory = account.transactionsHistory({ password: 'password123' });
    expect(transactionsHistory).toContain('50 euros');
    expect(transactionsHistory).toContain('-30 euros');
  });

  test('should return "no password given" for transactions history without password', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    const transactionsHistory = account.transactionsHistory();
    expect(transactionsHistory).toBe('no password given');
  });

  test('should return "wrong password" for transactions history with incorrect password', () => {
    const account = new BankAccount('John Doe', 'FR1234567890123456789012345', 200, 'password123');
    const transactionsHistory = account.transactionsHistory({ password: 'incorrectPassword' });
    expect(transactionsHistory).toBe('wrong password');
  });

});

describe('Transaction', () => {
  test('should create a Transaction instance', () => {
    const transaction = new Transaction(50);
    expect(transaction).toBeInstanceOf(Transaction);
  });

  test('should print transaction info', () => {
    const transaction = new Transaction(50);
    const expectedDate = new Date().toLocaleString();
    expect(transaction.toString()).toBe(`50 euros on ${expectedDate}`);
  });

});
