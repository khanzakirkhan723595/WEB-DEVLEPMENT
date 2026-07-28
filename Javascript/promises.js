  
//consumption type
function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("Data fetched successfully\n");
            }
            else{
                reject("error fetching data\n");
            }
        },4000)
        console.log("end of promise")
    })
    
}

//how to consume the promise
let response=fetchdata();
console.log(response)

response
.then((data)=>console.log(data))
.catch((error)=>console.log(error))