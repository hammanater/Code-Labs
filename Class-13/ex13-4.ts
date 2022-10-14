class Human3 {
    birthYear: number = 0;
    ageDifference: string = ' ';
}
class Animal1 {
    birthYear: number = 0;
}

let person1 = new Human3()
person1.birthYear = 2000
person1.ageDifference = "5 years."
let pet = new Animal1()
pet.birthYear = 2005

console.log("The age difference between my animal and I is 5 years")