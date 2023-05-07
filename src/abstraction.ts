interface IVehicle {
	name: string;
	model: number;
}
const Vehicle: IVehicle = {
	name: "Car",
	model: 2000,
};
// Implement Abstraction
// interface IVeh {
// 	startEngine(): void;
// 	stopEngine(): void;
// We can also use interface method optional way
// 	move?(): void;
// }

// class VehicleEngine implements IVeh {
// 	startEngine(): void {
// 		console.log(`I am starting the vehicle`);
// 	}
// 	stopEngine(): void {
// 		console.log(`I am stopping the vehicle`);
// 	}
// If we don't have a move method it's not showing error
// 	move(): void {
// 		console.log(`I am moving the vehicle`);
// 	}
// }

// Abstract Class
interface IVeh {
	startEngine(): void;
	stopEngine(): void;
	move(): void;
}

abstract class VehicleEngine {
	constructor(
		public name: string,
		public brand: string,
		public model: number
	) {}
	abstract startEngine(): void;
	abstract stopEngine(): void;
	move(): void {
		console.log(`I am moving the vehicle`);
	}
}
class Car extends VehicleEngine {
	startEngine(): void {
		console.log(`I am started the vehicle`);
	}
	stopEngine(): void {
		console.log(`I am stopping the vehicle`);
	}
}

// const car1 = new VehicleEngine("Car", "Honda", 2000);
// car1.
