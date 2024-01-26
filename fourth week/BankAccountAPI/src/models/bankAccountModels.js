class BankAccount {
  constructor(clientName, accountNumber, balance) {
    if (balance <= 0) {
      throw new Error('The balance must be greater than zero to create a new account!');
    }
    this.clientName = clientName;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.bankStatement = [];
  }

  addBankStatement(operation) {
    this.bankStatement.push(operation);
  }

  getBankStatement() {
    this.bankStatement.forEach(operation => {
      console.log(`${operation.type} - value: ${operation.amount} - New balance: ${operation.balance}`)
    });
  }

  withdrawal(value) {
    if (value > this.balance) {
      throw new Error('Insufficient balance!');
    }
    this.balance = this.balance - value;
    this.addBankStatement({
      type: 'withdrawal', 
      amount: value, 
      balance: this.balance
      
    });
  }

  deposit(value) {
    if (value <= 0) {
      throw new Error('The deposit must be greater than zero');
    }
    this.balance = this.balance + value;
    this.addBankStatement({
      type: 'deposit', 
      amount: value, 
      balance: this.balance
    });
  }
}

const client1 = new BankAccount('Victor Gabriel dos Santos Monger', '23443200', 1000);
const client2 = new BankAccount('Diogo Felipe Stefano Monger', '24554200', 30000);

