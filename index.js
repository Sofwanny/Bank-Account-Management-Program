class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = []
  }

  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({
        type: "deposit",
        amount: amount,
      });

        this.balance += amount;
        return `Successfully deposited ${amount}. New balance: ${this.balance}`;
    }

    else if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
 
  } 

   withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.transactions.push({
          type: "withdraw",
          amount: amount,
        })

       this.balance -= amount;
       return `Successfully withdrew ${amount}. New balance: ${this.balance}`;

      }

       else if (amount <= 0 || amount > this.balance) {
         return `Insufficient balance or invalid amount.`;
       }
    }

checkBalance() {
return `Current balance: ${this.balance}`;
}

listAllDeposits() {
  const depo = []
  this.transactions.forEach((deposits) => {
    if (deposits.type === "deposit") {
    depo.push(deposits.amount);
    }
  })
  return `Deposits: ${depo.join(",")}`
}

listAllWithdrawals() {
  const withdrawal = []
  this.transactions.forEach((withdraws) => {
    if (withdraws.type === "withdraw") {
    withdrawal.push(withdraws.amount);
    }
  })
  return `Withdrawals: ${withdrawal.join(",")}`
}
}
const myAccount = new BankAccount();
console.log(myAccount.deposit(5000));
console.log(myAccount.withdraw(4000));
console.log(myAccount.withdraw(4000));
console.log(myAccount.deposit(70000));
console.log(myAccount.checkBalance());
console.log(myAccount.withdraw(300));
console.log(myAccount.deposit(700));

