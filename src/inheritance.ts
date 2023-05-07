// class Parent {
// 	name: string;
// 	age: number;
// 	address: string;
// 	constructor(name: string, age: number, address: string) {
// 		this.name = name;
// 		this.age = age;
// 		this.address = address;
// 	}
// 	makeSleep(hours: number): string {
// 		return `This ${this.name} will sleep for ${hours}`;
// 	}
// }
// // Using common class property also extra property
// class Teacher extends Parent {
// 	// Extra
// 	designation: string;
// 	constructor(name: string, age: number, address: string, designation: string) {
// 		super(name, age, address);
// 		// Extra
// 		this.designation = designation;
// 	}
// 	// Extra function
// 	takeClass(takclass: number): string {
// 		return `This ${this.name} will take ${takclass}`;
// 	}
// }
// const teacher1 = new Teacher("Mr.T", 30, "Bangladesh", "Excutive");
// teacher1.takeClass(3);
// // Using common class property
// class Student extends Parent {
// 	constructor(name: string, age: number, address: string) {
// 		super(name, age, address);
// 	}
// }
// const student1 = new Student("Mr", 15, "Dhaka");
// student1.makeSleep(8);
