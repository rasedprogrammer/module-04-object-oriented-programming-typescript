class BankAccount {
	public id: number;
	public name: string;
	private _balance: number;
	constructor(id: number, name: string, balance: number) {
		this.id = id;
		this.name = name;
		this._balance = balance;
	}
	// Encapsulation way declare
	private getDepositBalance(): number {
		return this._balance;
	}
	// Accessing Encapsulation Method Func Using Getter
	Test(): number {
		return this.getDepositBalance();
	}
	// Getter Methods
	get balance(): number {
		return this._balance;
	}
	// Setter Methods
	set deposit(amount: number) {
		this._balance = this._balance + amount;
	}
	getDeposit() {
		return `You have only ${this._balance} taka.`;
	}
}
class StudentAccount extends BankAccount {
	test() {
		this.Test;
	}
}
const myAccount = new BankAccount(444, "DBBL", 300000);
console.log(myAccount.balance);
myAccount.deposit = 200000;
console.log(myAccount.balance);

// myAccount._balance = 0;
// console.log(myAccount);
