import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const handlebtn = (pcnt) =>{
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1); //these all four will not increment suddenly like +4 , it will increment just 1

    //to incremnet +4 => we need to pass callback function 
    setCount((pcnt)=>pcnt+1)
    setCount((pcnt)=>pcnt+1)
    setCount((pcnt)=>pcnt+1)
    setCount((pcnt)=>pcnt+1)
    
    

  }


  const decrementbtn =()=>{
    setCount(count-1);
  }


  return (
    <>
    <h1>HI my name is zakir : {count}</h1>
    <button
    onClick={handlebtn}
     >Increment</button> {" "}
    <br/>
     <button onClick={decrementbtn}>Decrement</button>
     <p>how are you: {count}</p>
    </>
  )
}

export default App
