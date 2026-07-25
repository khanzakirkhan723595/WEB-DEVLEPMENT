import Link from "next/link";


function Navbar(){

return(

<nav>

<Link href="/">
Home
</Link>

{" | "}

<Link href="/dashboard">
Dashboard
</Link>

{" | "}

<Link href="/interview">
Interview
</Link>

{" | "}

<Link href="/history">
History
</Link>

</nav>

)

}

export default Navbar;