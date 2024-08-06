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


// const animal = {
//     eats: true,
// }
// const dog = Object.create(animal);
// dog.barks = true;
// const keysDog = Object.keys(dog);
// console.log(keysDog); //['barks']



// class User {
//     #mail;
//     constructor({ name, age, mail }) {
//         this.name = name;
//         this.age = age;
//         this.#mail = mail;
//     }
//     getMail() {
//         return this.#mail;
//     }
//     changeMail(newMail) {
//         return this.#mail = newMail;
//     }
// }
// const a = new User('Bob', '22');
// console.log(a); //{}
// const b = new User('Nika', '15');
// console.log(b);

// const a = new User({
//     name: 'Bob',
//     age: '22',
//     mail: 'bob@gmail.com',
// });
// a.changeMail('newbob@gmail.com');
// console.log(a.getMail());

// console.log(a.#mail);

// const b = new User({
//     name: 'Nika',
//     age: '15',
// });
// console.log(b);



// get set
// class User{
//     static Roles = {
//         ADMIN: 'admin',
//         USER: 'user',
//     }

//     #mail;
//     #role;
//     constructor({ name, age, mail, role }) {
//         this.name = name;
//         this.age = age;
//         this.#mail = mail;
//         this.#role = role;
//     }
//     get role() {
//         return this.#role;
//     }
//     set role(newRole) {
//         this.#role = newRole;
//     }
    
// }

// const c = new User({
//     mail: 'newbob@gmail.com',
//     role: User.Roles.ADMIN,
// });
// console.log(c.Roles);
// // console.log(User.Roles);
// // console.log(c.role);
// // c.role = User.Roles.USER;
// // onsole.log(c.role);

// class User {
//     static #takenEmails = [];

//     static isEmails(email) {
//         return User.#takenEmails.includes(email);
//     }

//     #email;
//     constructor({ email }) {
//         this.#email = email;
//         User.#takenEmails.push(email);
//     }
// }
// const newMail = new User({ email: 'test@gmail.com' });
// console.log(User.isEmails('test-one@gmail.com'))






// class Child extends Parent{

// }


class User{
    #email;
    constructor(email) {
        this.#email = email;
    }
    get email() {
        return this.#email;
    }
    set email(newEmail) {
        this.#email = newEmail;
    }
}

class Admin extends User{
// щось додаємо за потреби
    constructor({ email, post }) {
        super(email);
        this.post = post;
    }
}

const admin = new Admin({email: 'test@ukr.net', post:[]});
console.log(admin); //Admin {post: Array(0), #email: 'test@ukr.net'}
console.log(admin.email); //test@ukr.net
