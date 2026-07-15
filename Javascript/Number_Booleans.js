//a number represent any numeric value
const age=22;
const marks=91.5;
const temperature=32.8;

//check type 
console.log(typeof marks);

//arithmetic operators
const a=20;
const b=5;
//division
console.log(a/b);
//modulus
console.log(a%b);
//power
console.log(2**3);

//increment and decrement
let cnt=5;
cnt++;
console.log(cnt);
cnt--;
console.log(cnt);

//assignment operator
cnt+=1;
console.log(cnt);
cnt*=4;
console.log(cnt);
cnt/=8;
console.log(cnt);

//comparison operators
console.log(4>6);
console.log(8>2);
//loose equality
console.log(5=="5");//it will give true because js convert "5" to number 5 before comparing , this automatic conversion called type coercion

//strict equality
console.log(5==="5");//this will give false

//boolean

const isFileUploaded=false;
const isSidebarOpen=true;
//and(&&) => both true then true
console.log(isFileUploaded && isSidebarOpen);

//or(||) => if atleast one true then true
console.log(isFileUploaded || isSidebarOpen);

//falsy values => false, "" , null , undefined , NaN
if("")
{
    console.log("Hello");

}else{
    console.log("outer hello");

}

//math object

console.log(Math.round(4.6));
console.log(Math.floor(4.6)); //rounds down
console.log(Math.ceil(4.6)); //rounds up
console.log(Math.max(4,5,6,7,8,9));
console.log(Math.min(4,5,6,7,8,9));
console.log(Math.random());


//practice => generate a random integer btween 1 to 10
const num=Math.floor(Math.random()*10)+1;
console.log(num);















