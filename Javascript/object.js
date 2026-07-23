//an object groups related information together
const user = {
    name : "zakir",
    age : 23,
    email: "zakir@gmail.com",
    role : "student"
}
console.log(user);
//here name,age,emai,role => keys(properties)
// "zakir",22,"student","zakir@gmail.com" => values

//accessing properties
//dot method
console.log(user.email);
//bracket notation
console.log(user["age"]);

//when to use bracket notation => use when the property name is stored in variable
const key = "name";
console.log(user[key]); //zakir
console.log(user.key); //undefined => becoz js would literally look for a property named "key"

//objects are mutable, so we can chnage the property
user.name = "khan";
console.log(user);

//adding new property
//object can grow
user.batch="B22";
console.log(user);

//deleting the property
delete user.batch;
console.log(user);

//an object can contain almost any type of value , even another object or a function

//nested objects
const user1 = {
    name: "zakir",
    age: 22,
    address : {
        city : "kottayam",
        state : "kerala",
        country : "India"
    }
};
console.log(user1.address.country);

//object destructuring
const user3 = {
    name: "zakir",
    age: 22,
    role: "Student"
}

//without destructuring 
// const name=user3.name;
// const age=user3.age;
// const role=user3.role; //these are repetitive

//with destructuring
const {name,age,role} =  user3;  //react loves destructuring
console.log(name)
console.log(age)
console.log(role)

//renaming variables
const user4 = {
    name : "zakir",
    branch: "cse"
};
const {name : username, branch:department} = user4;
console.log(username);
console.log(department)

//default values
//suppose a property does not exist => useful when API data is missing
const {age1=20} = user4;
console.log(age1);


//nested destructuring
const user5 = {
    name: "zakir",
    age: 18,
    address: {
        city: "kottayam"
    }
};
//instead of 
console.log(user5.address.city);
//we can write
const {address:{city}} = user5;
console.log(city);



//Spread Operator => copies all properties from an object 
const user6 = {
    name: "zakir",
    age: 18,
}
console.log(user5.name);
const copiedUser = {
    ... user6 ,
    //adding new properties
    role: "Student",
    age : 25
};
copiedUser.name="bhai";
console.log(user6.name)
console.log(copiedUser.name); // updating existing properties => original user object is not chnaged

//only nested objects and array will change and rest will not change
const student1 = {
    name: "Zakir",
    marks: {
        math: 90
    },
    hobbies: ["Coding", "Gym"]
};

const student2 = {
    ...student1
};

student2.name = "Aman";
student2.marks.math = 100;
student2.hobbies.push("Football");

console.log(student1.name);//zakir becoz primitive value
console.log(student1.marks.math);//100 becoz array
console.log(student1.hobbies); //becoz array  













