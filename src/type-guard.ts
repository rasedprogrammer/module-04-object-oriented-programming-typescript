// // Keyof Guard
// type Alphaneumeric = string | number;
// function add(param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric {
// 	// Declare Keyof Guard
// 	if (typeof param1 === "number" && typeof param2 === "number") {
// 		return param1 + param2;
// 	} else {
// 		return param1.toString() + param2.toString();
// 	}
// }
// // const result33 = add("2", "4");
// // console.log(result33);

// type NormalUserType = {
// 	name: string;
// };
// type AdminUserType = {
// 	name: string;
// 	role: "admin";
// };
// function getUserType(user: NormalUserType | AdminUserType) {
// 	// there is In Guard Use
// 	if ("role" in user) {
// 		return `I am an administrator and my role is ${user.role}`;
// 	} else {
// 		return `I am a Normal User`;
// 	}
// }
// const normalUser1: NormalUserType = { name: "Mr." };
// const adminUser1: AdminUserType = { name: "Mr. X", role: "admin" };
// // console.log(getUserType(normalUser1));
// // console.log(getUserType(adminUser1));

// // Intanceof Guards
// class AnimalCalssCheck {
// 	name: string;
// 	species: string;
// 	constructor(name: string, species: string) {
// 		this.name = name;
// 		this.species = species;
// 	}
// 	makeSoundAnimal() {
// 		console.log("Animal shouding");
// 	}
// }
// class DogSound extends AnimalCalssCheck {
// 	constructor(name: string, species: string) {
// 		super(name, species);
// 	}
// 	makeSoundDog() {
// 		console.log("I am Ghue Ghue");
// 	}
// }
// class CatSound extends AnimalCalssCheck {
// 	constructor(name: string, species: string) {
// 		super(name, species);
// 	}
// 	makeSoundCat() {
// 		console.log("I am Meaw Meaw");
// 	}
// }
// // Animal Type Function
// function isDog(animal: AnimalCalssCheck): animal is DogSound {
// 	return animal instanceof DogSound;
// }
// // Cat Function Check
// function isCat(animal: AnimalCalssCheck): animal is CatSound {
// 	return animal instanceof CatSound;
// }
// function getAnimalSound(animal: AnimalCalssCheck) {
// 	if (isDog(animal)) {
// 		animal.makeSoundDog();
// 	} else if (isCat(animal)) {
// 		animal.makeSoundCat();
// 	} else {
// 		animal.makeSoundAnimal();
// 	}
// }
// const animal11 = new DogSound("German Bhai", "Dog");
// const animal12 = new CatSound("Pershian Bhai", "Cat");
// getAnimalSound(animal11);
// getAnimalSound(animal12);
