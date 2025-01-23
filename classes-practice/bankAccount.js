class BankAccount {
  constructor(owner, iban, initialBalance, password) {
      if (initialBalance <= 100) {
          throw new Error("Initial deposit must be greater than zero.");
      }
      this.owner = owner;
      this.iban = iban.replace(/[-\s]/g, ""); // Nettoyer l'IBAN pour éviter les erreurs liées aux tirets ou espaces
      this.balance = initialBalance;
      this.password = password;
      this.transactions = [];

      // Ajouter une transaction initiale
      this.addTransaction(initialBalance, "Initial deposit");
  }

  // Masquer une partie de l'IBAN
  getPartialIban() {
      const visibleStart = this.iban.slice(0, 13);
      const hiddenPart = "*".repeat(this.iban.length - 18);
      const visibleEnd = this.iban.slice(-3);
      return `${visibleStart}${hiddenPart}${visibleEnd}`;
  }

  // Afficher les informations du compte
  toString() {
      return `Owner: ${this.owner} - IBAN: ${this.getPartialIban()} - Balance: ${this.balance} euros`;
  }

  // Déposer de l'argent
  deposit(amount) {
      if (amount <= 0) {
          throw new Error("Deposit amount must be greater than zero.");
      }
      this.balance += amount;
      this.addTransaction(amount, "Deposit");
      return `You've just deposited ${amount} euros.`;
  }

  // Retirer de l'argent
  withdraw(amount) {
      if (amount <= 0) {
          throw new Error("Withdrawal amount must be greater than zero.");
      }
      if (amount > this.balance) {
          throw new Error("Insufficient funds.");
      }
      this.balance -= amount;
      this.addTransaction(-amount, "Withdrawal");
      return `You've just withdrawn ${amount} euros.`;
  }

  // Ajouter une transaction
  addTransaction(amount, description) {
      const date = new Date().toLocaleString(); // Date en format lisible
      this.transactions.push({ date, amount, description });
  }

  // Historique des transactions
  transactionsHistory({ password } = {}) {
      if (!password) {
          return "no password given";
      }
      if (password !== this.password) {
          return "wrong password";
      }
      if (this.transactions.length === 0) {
          return "No transactions available.";
      }

      // Retourner une liste formatée des transactions
      return this.transactions
          .map(
              (t, index) =>
                  `Transaction #${index + 1}:\n  Date: ${t.date}\n  Description: ${t.description}\n  Amount: ${t.amount} euros`
          )
          .join("\n\n");
  }
}

// Tests
try {
  const account1 = new BankAccount(
      "John Lennon",
      "FR14-2004-1010-0505-0001-3M02-606",
      0, // Dépôt initial insuffisant
      "yoko"
  );
} catch (error) {
  console.log(error.message); // Devrait afficher : "Initial deposit must be greater than zero."
}

try {
  const account2 = new BankAccount(
      "Paul McCartney",
      "FR14-2004-1010-0505-0001-3M02-606",
      100, // Dépôt valide
      "paul"
  );
  console.log(account2.toString()); // Affiche les informations du compte
} catch (error) {
  console.log(error.message);
}


module.exports = BankAccount;
