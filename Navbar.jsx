import Link from "next/link";


export default function Navbar () {
return (

<nav className="flex justify-between px-15 py-15">

<div>
<a href="/">Logo</a> 
</div>
<div>
    <a href="/">Home</a>
</div>
<div>
<Link href="/services" className="text-purple-600 underline">Services</Link>
</div>
<div>
<Link href="/about">About</Link>
</div>
<div>

    <Link href="/contacts">Contacts</Link>
</div>



</nav>




)



}