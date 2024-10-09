// let x : number = 101;  //Define the data type
// x = "harkirat"
// console.log(x);


// function greet(firstname: string){
//     console.log("hello "+ firstname);
    
// }

//     greet("ahaan")


function sum(a:number , b:number):number {
    return a + b;
}

const value = sum (1,2)
console.log(value);


function isLegal(age:number):boolean{
    if(age>18){
        return true
    }else{
        return false
    }
}

const legal = isLegal(18)


function runAfter1S(fn: () => void){
    setTimeout (fn,1000)
}

runAfter1S(function(){
    console.log("Hi there");
    
})

