let x: number = 101;

// x= "nclnljs"

console.log(x);

function greet(firstName: string) {
   console.log("Hello " + firstName);
}

greet("Ahaan");

// Return something
function abcd(): number {
   return 12;
}

abcd();

function string(): string {
   return "ROhit";
}

//Void means it is not returning anything;
function Void(): void {
   return console.log("Hi this is a void function");
}

Void();

enum Direction {
   top = "TOP",
   left = "LEFT",
   right = "RIGHT",
   bottom = "Bottom",
}

enum Human {
   name = "MD SHAHNAWAZ",
   age = 25,
}

console.log(Human.name);

let b: string = "A";
let c: boolean = true;

let variable: string;
variable = "rohit sharma";

let variable2: string | number;
variable2 = "786";

if (typeof variable2 === "string") {}

function callAfter1s(cb: () => void) {
   setTimeout(cb, 1000);
}

callAfter1s(function () {
   console.log("Hii there");
});

// Without Interface
function isLegal(user: { firstName: string; lastName: string; age: number }) {
   if (user.age > 18) {
      return true;
   } else {
      return false;
   }
}

function greetUser(user: { firstName: string; lastName: string; age: number }) {
   console.log("hi there " + user.firstName);
}

isLegal({
   firstName: "Ahaan",
   lastName: "Khan",
   age: 20,
});

// With interface
interface User {
   firstName: string;
   lastName: string;
   age: number;
   email?: string;
}

function isLegalUser(user: User) {
   if (user.age > 18) {
      return true;
   } else {
      return false;
   }
}

isLegalUser({
   firstName: "Ahaan",
   lastName: "Khan",
   age: 19,
});

// Types
function greetType(id: number | string) {}

greetType(1);
greetType("2");

type greetArg = number | string | boolean;
function greet2(id: greetArg) {}

greet2(1);
greet2("2");

// Array
type numberArr = number[];

function maxValue(arr: numberArr) {
   let max = 0;
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
         max = arr[i];
      }
   }
   return max;
}

maxValue([1, 2, 3]);

// Array tuples
let arr: [number, string] = [1, "rohit"];

type hiring = {
   name: string;
};

type hiringManager = {
   numberOfManager: number;
};

type nameAndTotalManager = hiring & hiringManager;

let Arjun: nameAndTotalManager = {
   name: "Arjun khanpur",
   numberOfManager: 49,
};

type city = {
   name: string;
   population: number;
};

type planet = {
   name: string;
   cities: number;
};

type galaxy = city & planet;

let earth: galaxy = {
   name: "earth",
   population: 800000000,
   cities: 90,
};

// Aliases
type human = {
   name: string;
   age: number;
   email: string;
};

let Ahaan: human = {
   name: "Ahaan khan",
   age: 20,
   email: "mdshahnawaz@gmail.com",
};

// Union
type age = string | number;

let ahaanAge: age = "12";

// Interfaces and extends
interface User {
   name: string;
   userName: string;
   age: number;
   email: string;
   password: string;
}

function getUser(user: User) {
   return user.age;
}

interface man {
   name: string;
}

interface man {
   age: number;
}

function getMandetail(man: man) {}

interface sweet {
   name: string;
   price: number;
}

interface food extends sweet {
   verySweet: boolean;
}

function getSweet(getSweet: food) {
   getSweet.name;
}

interface isVeg extends food {
   isVeg: boolean;
}

function IsVegFood(isVeg: isVeg) {
   isVeg.isVeg;
}

// Classes
class Airpod {
   price = 25000;
   image = "image/airpod";
   color = "white";

   playMusic() {
      console.log("music is playing..");
   }

   switchMode(mode: string) {
      console.log(mode);
   }
}

class AirConditionFunctionality {
   color = "white";
   category = "ac";
   company = "Voltas";

   temprature = 22;
   turnOnAc() {
      console.log("Turning On ");
      console.log("Turned on.");
   }

   turnOff() {
      console.log("TurnOFf....");
   }

   raiseTemprature() {
      this.temprature++;
      console.log(this.temprature);
   }

   decreaseTemprature() {
      console.log("decreasing temprature 1");
   }
}

let ac = new AirConditionFunctionality();
let ac2 = new AirConditionFunctionality();

ac.raiseTemprature();
ac.raiseTemprature();

class penDrive {
   company = "HP";
   price = 1200;
}

class food {
   price = 1200;
   eat() {
      console.log("Eating");
   }
}

class Sweet extends food {
   name = "Sweet";
}

let Cake1 = new Sweet();

class Pendrive {
   company = "HP";
}

let p1 = new Pendrive();
let p2 = new Pendrive();
console.log(p1);
console.log(p2);

// Constructor
class PendriveWithConstructor {
   public company: string;

   constructor() {
      this.company = "HP";
   }
}

class Laptop {
   public company: string;
   constructor(name: string) {
      this.company = name;
   }
}

let i3 = new Laptop("sandisk");
console.log(i3);

let i5 = new Laptop("Realme");

class earPhone {
   public brandName: string;

   constructor(name: string) {
      this.brandName = name;
   }
}

let boatEarBuds = new earPhone("Realme");

console.log(boatEarBuds);

let RealmeEarBuds = new earPhone("Realme Ear buds");

console.log(RealmeEarBuds);

class Mouse {
   mouseName: string;
   constructor(isWireless: any | string) {
      this.mouseName = isWireless;
   }
}

let mouseHp = new Mouse(false + "yes");
console.log(mouseHp);

// Private
class table {
   private name: string;
   private price: number;

   constructor(Name: string, Price: number) {
      this.name = Name;
      this.price = Price;
   }
}

let DiningTable = new table("yes bought", 1200);

console.log(DiningTable);

// Parameter
class basics {
   name: string;
   classes: string;
   shift: string;
   email: string;
   password: string;

   constructor(
      public name: string,
      public classes: string,
      public shift: string,
      public email: string,
      public password: string
   ) {
      this.name = name;
      this.classes = classes;
      this.shift = shift;
      this.password = password;
      this.email = email;
   }
}

console.log(basics);

// Modifier
class Box {
   name = "circle";

   getName() {
      console.log(this.name);
   }
}

let AnotherBox = new Box();

let square = (AnotherBox.name = "Square");

console.log(AnotherBox.name);
console.log(square);

class balance {
   private accBalance = 1200;

   getAccBalance() {
      this.accBalance = 12000;
      console.log(this.accBalance);
   }
}

let u1 = new balance();

console.log(u1.getAccBalance());

// Read only property
class abcd {
   constructor(public readonly name: string) {
      this.name = name;
   }

   getName() {
      console.log(this.name);
   }
}

let abcd1 = new abcd("harsh");

abcd1.getName();

// Getter and setter:-
class Getter {
   constructor(public userName: string) {
      this.userName = userName;
   }

   get name() {
      return this.userName;
   }

   set name(name: string) {
      this.userName = name;
   }
}

let getter1 = new Getter("Ahaan");
console.log(getter1);

class Animal {
   name: string;
   constructor(name: string) {
      this.name = name;
   }

   get animalName() {
      return this.name;
   }

   set animalNames(name: string) {
       (this.name = name);
   }
}

let animal1 = new Animal("Monkey");

animal1.animalNames = "Donkey";
console.log(animal1.animalNames);

// Additional functions
function str(): string {
   return "HIII";
}

function type(a: number, b: string) {
   return (a = 393), (b = "clksd");
}

function option(name: string, age: number, gender?: string) {}
