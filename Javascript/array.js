const colors =["red","green","blue"];
console.log(colors[0]);

//array are mutable so we can updata allso
colors[0]="pink";

colors[4]="pink"; //increase the array size
console.log(colors);

//array length
console.log(colors.length);

//array can store different data types
const data=["zakir",22,true,null];
//although js allow this , in real projects it is better to keep similar types together


//array of objects
const users = [
    {
        name: "zakir",
        age: 22
    },
    {
        name:"Aisha",
        age:21
    }
];

console.log(users[1].name)


//array method
const files=["river","rainfall","report"];
//push
files.push("prediction");
console.log(files);

//pop()
files.pop();
console.log(files)
console.log(files.pop())



//unshift=> add elements to the beginning
files.unshift("welcome");
console.log(files)

//shift=> remove the first element
files.shift();
console.log(files)
//console.log(files.shift())//it also return

//includes=> check if an array  contains a value

console.log(files.includes("welcome"));//false;
console.log(files.includes("rainfall"));//true

//indexof()=> returns the index of element
console.log(files.indexOf("welcome"));//-1
console.log(files.indexOf("rainfall"));//1

//slice
//safest array method, it does not chnage the original array

const alpha = ["A","B","C","D"];
const result=alpha.slice(1,3);//included 1 and excluded 3
console.log(alpha);
console.log(result)

//splice

//this is powerfull, unlike slice it changes the original array
//const res=alpha.splice(1,3);
// console.log(alpha);
// console.log(res)
//also we can add elements
alpha.splice(2,1,"E");//starts at idx 2 and delete 1 element and add "E"
console.log(alpha);

//replace
alpha.splice(0,1,"X");
console.log(alpha);

//forEach=> it does not return a new array it just print all elements from the array
alpha.forEach((file)=>{
    console.log(file)
})

//map=> transform every elements into somthing new and it return a new array
const names=alpha.map((mp)=>{
    return mp;
})
console.log(names)


//filter()
//keep only the elements that satisfy a condition
const nusers=[
    {
        name:"zakir",
        age:22,
        profession:"student"
    },
    {
        name:"aisha",
        age:21,
        profession:"student"
    },
    {
        name:"ali",
        age:25,
        profession:"Teacher"
    },

]

const profess=nusers.filter((prof)=>{
    return prof.profession==="student";

})
console.log(profess)


//find=>find one element
const std=nusers.find((data)=>{
    return data.age===22;
})
console.log(std)


//reduce
const numbers = [10,20,30];
const total=numbers.reduce((sum,number)=>{
    return sum+number;
},0);
console.log(total)







