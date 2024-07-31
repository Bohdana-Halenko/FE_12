// Процедурне програмування
const baseSalary = 20000;
const overtime = 15;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
    return baseSalary + overtime * rate;
}

getWage(baseSalary, overtime, rate);


// ООП
const employee = {
    baseSalary: 20000,
    overtime: 15,
    rate: 20,
    getWage() {
        return this.baseSalary + this.overtime * this.rate;
    }
}
employee.getWage();



// const animal = {
//     legs: 4,
// }

// const cat = Object.create(animal);
// cat.name = 'Bob';
// console.log(cat);

// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//     if (!dog.hasOwnProperty(key)) continue;
//     console.log(key);
// }


const animal = {
    eats: true,
}
const dog = Object.create(animal);
dog.barks = true;
const keysDog = Object.keys(dog);
console.log(keysDog); //['barks']
