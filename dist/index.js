"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "haein", age = 24, gender = "female";
const person = {
    name: "haein", age: 24, gender: "female"
};
const sayHi = (name, age, gender) => {
    return `hello ${name},you are ${age}, you are a ${gender}!`;
};
const sayHiInterface = (person) => {
    return `hello ${person.name},you are ${person.age}, you are a ${person.gender}!`;
};
console.log(sayHiInterface(person));
//# sourceMappingURL=index.js.map