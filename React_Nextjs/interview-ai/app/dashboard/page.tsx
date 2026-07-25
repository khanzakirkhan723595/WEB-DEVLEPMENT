import InterviewCard 
from "@/components/InterviewCard";
import TestButton from "@/components/TestButton";


export default async function Dashboard(){

const interviews=[
"JavaScript Interview",
"React Interview",
"Next.js Interview"
]


return(

<div>

<h1>
Interview Topics
</h1>


{
interviews.map((item,index)=>(

<p key={index}>
{item}
</p>

))
}


<InterviewCard/>

<TestButton/>


</div>

)

}