class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?:string){
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const yoon = new Human("yoon", 18, "male")

const sayHi = (person: Human) => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`
}


console.log(sayHi(yoon))
export {};

