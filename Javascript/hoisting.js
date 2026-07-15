//javascript works in two phase , first it scan the entire file but it does not execute code yet , it only allocate memory for variables and function
//second phase execute the code line by line

//var initialized with undefined
// console.log(city);
// var city = "kottayam";

//this will give referece error , during memory phase no value assigned only city1 unlike var , it stays uninitialized
//same const
// console.log(city1);
// let city1 = "kottayam";

//TDZ-> temporal dead zone is the period btween variable creation and vraible initialization, during this time we cannot access the variable
//timeline=> program starts -> memory created -> username exists -> TDZ starts -> console.log(username) ->reference error -> let username "zakir" -> TDZ ends

//console.log(username);
//let username="zakir";
//after initialization console.log(username) works normally
//console.log(username);
//why javascript introduced tdz
//let username;
//console.log(username); //what will be the output , would it undefined or notinitialized or anything ->this could hide programming mistakes
//tdz forces us to initialize variables before using them -> it helps developer catch bugs clearly
//correct way
let username="zakir";
console.log(username);

//hoisting and function
greet(); //output is hello => because during the memory phase , the entire function is stored not only function name whole function code stored
function greet(){
    console.log("hello");
}


