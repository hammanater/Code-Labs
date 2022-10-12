let  firstName: string = "John"

let num: number = 5;

let lightSwitch:boolean = false;

let user : {
    name: string;
    age: number;
} = {
    name: "john",
    age: 22
}

// Array of Strings
let names: string[] = ["John", "James", "Jamison"]

// Array of objects
let users: {
    name: string;
    age: number;
    height: string
}[] = [
    {
        name: "John",
        age:22,
        height: '5`7'
    }
]

// transpile a file 

// npx tsc index.ts -> index.js
// node index.js