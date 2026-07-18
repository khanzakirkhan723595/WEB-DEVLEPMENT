//in js , a function is just another value like
const username="zakir";
//we can also store a function
const greet = () => {
    console.log("hello");

}

//function are values, js let us store,pass , return them , save then inside objects , save them inside arrays
//passing a function
const execute = (fn) => {
    fn();
}
execute(greet);
// greet() => run the function now
// greet => give me function itself don't run it yet

//callback function => a function passed as an argument to another function , so it can be called later
// const execute1 = (callback) => {
//     callback();
// };
// execute1(greet);
//callback does not decide when to run , the outer function decides like here execute1


//Higher Order Function
//a function that accepts another function as a parameter or returns a function
// above execute1 is HOF becoz it accepts another function

// Anonymous callback 
//insted of 
const execute1 = (callback) => {
    callback();
};
//execute1(greet);

//we can write 
execute1(() => {
    console.log("Hello");
});

//why map uses callback
const numbers = [1,2,3];
const mnumbers = numbers.map((number) => {
    return number*2;
})
console.log(mnumbers);
const fnumbers = numbers.filter((number) => {
    if(number >=2)
        return number;
})

console.log(fnumbers);


//setTimeout callback => we never call it js does
setTimeout(() => {
    console.log("hello");
},3000)


// event listener => when does the callback run ? -> only after the user clicks
// Button.addEventListener("click",() => {
//     console.log("clicked");
// })

// ForEach() => higher order function and arrow function is callback
const projects = ["flood analysis","river survey","rainfall report"];
projects.forEach((project)=>{
    console.log(project);
})


