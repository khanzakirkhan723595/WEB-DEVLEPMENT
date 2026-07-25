"use client"

import {useState} from "react"
import Button from "./Button"


function GenerateInterview(){

const [text,setText] = useState("")


return(

<>

<Button
text="Interview Generate"
onClick={()=>setText("Generating...")}
/>

<p>{text}</p>

</>

)

}


export default GenerateInterview;