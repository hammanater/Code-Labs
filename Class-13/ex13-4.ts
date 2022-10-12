class Human {
    birthYear: number = 0;
    ageDifference: string = ' ';
}
class Animal {
    birthYear: number = 0;
}

let person1 = new Human()
person1.birthYear = 2000
person1.ageDifference = "5 years."
let pet = new Animal()
pet.birthYear = 2005

console.log("The age difference between my animal and I is 5 years")