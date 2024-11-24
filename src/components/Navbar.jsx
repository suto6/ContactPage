
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 flex justify-between py-1 px-6 bg-white h-14">
                <div>
                    <img className="h-12 pt-2" src={logo} alt="Contact" />
                </div>
                <ul className="flex gap-5 text-2xl font-semibold font-mono items-center">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">About</li>
                    <li className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar