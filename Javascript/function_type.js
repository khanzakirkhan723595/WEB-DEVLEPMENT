function welcome(name){
    console.log(`welcome ${name}`);

}
welcome("Zakir");
welcome("khan");

//we can store a function inside a variable
const greet=function (){
    console.log("Hello");
};
function greet1 (){
    console.log("Hello1");
};
greet();
greet1();

//Anonymous function => function which have no name
//here the variable greet3 store it 
const greet3=function (){
    console.log("Hello");
};

const add=function (a,b){
    return a+b;
}
console.log(add(20,33));

//we are using anonymous function because js often passes functions around like normal values
//later we will see like this
/* <button>Button</button>
Button.addEventListener("click",function(){
    //write the code here
}); */
//so this above function does not need a separate name

//arrow function
//modern js used this
const greet4 = () =>{
    console.log("Hello from greet4");
}
greet4();

//difference btween normal and arrow
const greet5=function (name){
    console.log(name);
}
const greet6 = (name) => {
    console.log(name);
}
greet5("Zakir from normal");
greet6("Zakir from arrow");

//multiple parameter
const add2 = (a,b) => {
    console.log(a+b);
}
add2(4,7);

//one parameter shortcut -> here braces are optional
const greet7=(name) =>{
    //this is also correct
}
const greet8=name => {
    //this is also correct without parentheses
}

//implicit return
const add3 = (a,b) => {
    return a+b;
}
console.log(add3(4,9));
//use shortcut
const add4 = (a,b) => a+b; //no return here , no braces , js returns automatically
console.log(add4(5,9));

//example for square
const square = (n) => n*n;
console.log(square(5));

//react loves arrow function because react components are simply functions
// const Navbar = () => {
//     return (
//         <h1> Navbar</h1>
//     );
// };
//arrow function make the code coincise and readable





