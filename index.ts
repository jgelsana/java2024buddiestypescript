export const testFunction = () => {
    console.log("First Hello from Typescript update3");
};

testFunction();

// var parent:any
// parent = 'abc'
// parent = 7

var x:number = 10;
var y: string = "test";
var z: boolean = false;
let k:any = 7

//example of function
function add(x: number, y: number): number {
    return x + y;
}

let sum = add(3,4)


//type assertion
x = (k as string).length

//array
let stringArray: string[] = [];
let myArray = new Array(10);

stringArray.push("Jake");
myArray.push("Jose Guzman");

//enum
enum Direction {
    Up = 333,
    Down,
    Left,
    Right,
}

// console.log('direction: ' + Direction.Left);

//interface
interface DogInterface {
    name: string;
    breed: string;
    eat?: (food: string) => void;
}

class Dog implements DogInterface {
    name: string;
    breed: string;
    constructor(name: string, breed: string) {
        this.name = name;
        this.breed = breed;
    }
    eat = (food:string) => {
        //console.log(this.name + " of breed "+ this.breed + " is eating " + food);
        console.log(`${this.name} update of breed ${this.breed} is eating ${food}.`);
    }
}



// export const exampleIf = () => {
    // var cond = true;
    // if(cond === true) {

    // }
    // == -> comparison
    //'7' == 7, true
    // === -> string comparison
    //false === false, true
    // if(cond) {

    // } else if(cond === '') {
         
    // }
//}

// export const exampleCase = (value:string) => {
//     switch(value){
//         case "firstCase":
//             break
//         case "secondCase":
//             break;
//         default:

//     }
// }

const dog = new Dog('Buddy','Labrador');
dog.eat('kible')

let dogArray: DogInterface[] = []

const dog2:DogInterface = {
    name: "Scooby Doo",
    breed: "Great Dane"
}

const dog3 = new Dog('Snoopy','Beagle')

export const addDog = (data: DogInterface) => {
    dogArray.push(data)
}

addDog({
    name:"Barney",
    breed:"Sheepdog"
})

dogArray.push(dog)
dogArray.push(dog3)

export const loopDogs = () =>{
// for(let i = 0;i<dogArray.length;i++){
    //     console.log(dogArray[i])
    // }
    // for(let data of dogArray){
    //     console.log(data)
    // }
    // for(let data in dogArray){
    //     console.log(`${data+1}: ` + dogArray[data])
    // }

    // for(let i = 0;i<dogArray.length;i++){
    //     console.log(dogArray[i])
    // }
    //for(Dog d: dogArray)

    // while
    // let i = 0
    // console.log('while');
    // while(i < dogArray.length) {
    //     console.log(dogArray[i])
    //     i++
    // }

    // // forEach
    // console.log("forEach");
    // dogArray.forEach((data:DogInterface) => {
    //     console.log(data)
    // })

    // map
    // dogArray = dogArray.map((data:DogInterface) => {
    //     data.breed = 'morph'
    //     return data;
    // });

}

loopDogs();

// tuple
// var tuple: (number|string) = ['myString', 700, 'anotherString']

var names: string[] = [];

export const addName = (data:string) => {
    names.push(data);
    displayNames();
}

export const displayNames = () => {
    let list = document.getElementById("myList");
    if(list) {
        while(list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    names.forEach(element => {
        let li = document.createElement("li") //<li></li>
        li.innerText = element
        if(list) {
            list.appendChild(li)
        }
    }

    )
}

displayNames();