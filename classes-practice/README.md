A robust object-oriented design hinges on thoughtful exposure of an object's internals. Exposing an object involves making its properties available to the outside world, forming its public interface. Conversely, methods accessible only within the object itself constitute its private interface. A guiding principle is to expose only what is necessary for external interaction.

## Objectives
- Create a class with a public interface in JavaScript.
- Work with getters to control property access. 
- Define a custom `toString` method for user-friendly information.
- Utilize default parameters in methods.
- Explore the concept of custom exceptions in JavaScript.
## Specs
### The `BankAccount` Contract in `bankAccount.js`

The class, representing the public interface, outlines the promises made by the class to external entities. In this challenge, we'll define the contract for the `BankAccount` class. External entities should be able to:
- Access owner's full name and balance.
- Access only a partial IBAN, e.g., IBAN: FR14**************606.
- Print partial account info in a user-friendly way.
- Withdraw or deposit money.
- View transaction history if a password is provided.
### The `toString` Method

The `toString` method, analogous to "to string" in JavaScript, is essential for presenting object information to users. Once implemented, it should resemble the following:

```javascript
const account = new BankAccount("John Lennon", "FR14-2004-1010-0505-0001-3M02-606", 200, "yoko");

console.log(account.toString());
// Output: Owner: John Lennon - IBAN: FR14**************606 - Balance: 200 euros
```


### Withdraw and Deposit

Implement the `withdraw` and `deposit` methods. Both methods should invoke a private `addTransaction` method, which is also called in the constructor. Each method should return a message like "You've just withdrawn/deposited XXX euros."
### Transactions History

Implement a `transactionsHistory` method. This method takes a password hash as a parameter (e.g., `{ password: 'yoko' }`), which is optional and defaults to an empty object. The method should:
1. Return a string displaying transactions if the correct password is given. 
2. Return `"wrong password"` if the password does not match the account's password. 
3. Return `"no password given"` if the method is called without arguments.
## Optional: Add a `Transaction` Class

Consider enhancing the `BankAccount` by introducing a `Transaction` class to store transaction details, including the date. Adjust the `transactionsHistory` method to display transactions with dates in a user-friendly format.
## Key Learning Points
- Recognize the public interface of a class.
- Understand the distinction between getters and setters. 
- Grasp the purpose of the `toString` method.
- Learn to use default parameters in JavaScript. 
