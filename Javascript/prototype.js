function Person (name){
    this.name=name;
    
}
//console.log(Person.prototype)
Person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}`);
}
let zakir=new Person("zakir");
zakir.greet();

// this and binding context

const Person1 = {
    name: "bhai",
    greet(){
        console.log(`Hello, my name is ${this.name}`)
    }
}
Person1.greet();

//but 
const greetfunctn=Person1.greet; //we are taking reference not executing it means we are transfering to another variable
greetfunctn();// give undefined becoz in this case context is lost

//if you want to grab the context in this case then bind the context
const boundgreet=Person1.greet.bind({name: "khan"});
boundgreet();
