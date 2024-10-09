import Link from "next/link";

const HomePage = () => {
  return (
    <nav> 
    <div>
 
    <ul className="ul">
        <li><Link href="/home" target="_blank">Home</Link></li>
        <li><Link href="/about" target="_blank">About</Link></li>
        <li><Link href="/contact" target="_blank">Contact</Link></li>
        <li><Link href="/service" target="_blank">Service</Link></li>
    </ul>
  
    </div>
    </nav>
  );
}

export default HomePage