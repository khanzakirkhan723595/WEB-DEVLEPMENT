import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

const reactElement ={
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click to visit google'
}



const anotherElement=(
  <a href="https://google.com" target='_blank'> Visit Google </a>
)

function MyApp(){
  return (
    <h1>my app</h1>
  )
}

//this is what react expect while rendering becoz it is object version of it
//how react can understand your language
//by using creatElement
const areactElement = React.createElement(
    'a',
    {
      href:'https://google.com' , target:'_blank'
    },
    'click to visit google'

)//this is how react break the above reactElement 

createRoot(document.getElementById('root')).render(
  
    
    //<App /> => we can call same function one by one we have to keep these in one dive like
    // <div>
    //   <App/>
    //   //<App />
    // </div>
    
    //anotherElement /*=> when i call like this it is working but when i call anotherElement() then i am getting error */
    //areactElement
    <App/>
    
  
)
