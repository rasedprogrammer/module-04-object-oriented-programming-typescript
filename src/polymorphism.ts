// // Simple Example
// class Person {
// 	takeNap(): void {
// 		console.log("I am sleeping 8 hours per day");
// 	}
// }
// class Student extends Person {
// 	takeNap(): void {
// 		console.log("I am sleeping 10 hours per day");
// 	}
// }
// class Developer extends Person {
// 	takeNap(): void {
// 		console.log("I am sleeping 6 hours per day");
// 	}
// }
// function getSleepTime(param: Person) {
// 	param.takeNap();
// }
// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();
// // getSleepTime(person1);
// // getSleepTime(person2);
// // getSleepTime(person3);

// // Advance Topic Example of Polymorphism
// class Shape {
// 	getArea(): number {
// 		return 0;
// 	}
// }
// class Circle extends Shape {
// 	radius: number;
// 	constructor(radius: number) {
// 		super();
// 		this.radius = radius;
// 	}
// 	getArea(): number {
// 		return Math.PI * this.radius * this.radius;
// 	}
// }
// class Rectangle extends Shape {
// 	width: number;
// 	height: number;
// 	constructor(width: number, height: number) {
// 		super();
// 		this.width = width;
// 		this.height = height;
// 	}
// 	getArea(): number {
// 		return this.width * this.height;
// 	}
// }
// function getAreaOfShape(param: Shape) {
// 	console.log(param.getArea());
// }
// getAreaOfShape(new Circle(10));
// getAreaOfShape(new Rectangle(10, 12));
