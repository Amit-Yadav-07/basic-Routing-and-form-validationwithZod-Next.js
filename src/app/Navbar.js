import Link from "next/link";

const navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">Next.js</div>
            <div className="links">
                <ul>
                    <Link href={'./'}>Home</Link>
                    <Link href={'./about'}>about</Link>
                    <Link href={'./contact'}>contact</Link>
                    <Link href={'./form'}>form</Link>
                </ul>

            </div>
        </nav>
    )
}


export default navbar;