// // Процедурний підхід
// const baseSalary = 20000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//     return baseSalary + overtime * rate;
// }

// console.log(getWage(baseSalary, overtime, rate)); //20200


// // ООП

// const employee = {
//     baseSalary: 20000,
//     overtime: 10,
//     rate: 20,
//     getWage() {
//         return this.baseSalary + this.overtime * this.rate;
//     }
// }

// employee.getWage();


// Прототип
// const animal = {
//     legs: 4,
// }

// const dog = Object.create(animal);
// dog.name = "Sharik";

// console.log(dog);

// console.log(animal.isPrototypeOf(dog));

// console.log(dog.hasOwnProperty("name")); //true
// console.log(dog.hasOwnProperty("legs")); //false


// const animal = {
//     eats: true,
// }

// const dog = Object.create(animal);
// dog.barks = true;

// const dogKeys = Object.keys(dog);
// console.log(dogKeys); //['barks]


// for (const key in dog) {
//     console.log(key); //barks, eats
// }

// for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) continue;
//     console.log(key); //barks
// }




class User{
    constructor({name, email}) {
        this.name = name;
        this.email = email;
    }

    getEmail() {
        return this.email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }
}

const matviy = new User({
  name: "Matviy",
  email: "matviy@gmail.com",
});
const anna = new User({
  name: "Anna",
  email: "anna@gmail.com",
});
console.log(matviy);
console.log(anna);