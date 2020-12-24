const name = "haein",age=24,gender = "female";
const person ={
    name : "haein",age:24,gender :"female"
}
interface human{
    name:string;
    age:number;
    gender : string
}
const sayHi = (name:string,age:number,gender:string):string =>{
    return `hello ${name},you are ${age}, you are a ${gender}!`

};
const sayHiInterface = (person:human):string=>{
    return `hello ${person.name},you are ${person.age}, you are a ${person.gender}!`

};
console.log(sayHiInterface(person))
export {};