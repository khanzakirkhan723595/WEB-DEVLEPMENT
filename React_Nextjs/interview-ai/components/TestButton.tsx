"use client"

import {useState} from "react"
import Button from "./Button"


export default function TestButton(){


const [message,setMessage] = useState("")


async function callAPI(){


const response = await fetch("/api/test")


const data = await response.json()


setMessage(data.status)


}


return(

<div>

<Button

text="Test API"

onClick={callAPI}

/>


<p>
{message}
</p>


</div>

)


}