import { Link } from 'react-scroll';
import Logo from "../../../public/images/logo.jpg";
import Button from "../../Layouts/Button.jsx";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from 'react';


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    };

    const closeMenu = () => {
        setMenu(false);
    };

    return (
        <div className='fixed w-full'>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-backgroundColor shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <span>
                            <img src={Logo} alt="" className={32} />
                        </span>
                        {/* <h1 className='ml-2 text-xl font-semibold'>Tropical4You</h1> */}
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Home</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>AboutUs</Link>
                        <Link to="features" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Features</Link>
                        <div className="relative group">
                            <div className="flex items-center gap-1">
                                <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Menu</Link>
                                <BiChevronDown className="cursor-pointer" size={25} />
                            </div>
                            <ul className='absolute hidden space-y-2 group-hover:block bg-[#e0dccc] border border-gray-300 rounded-lg p-5'>
                                <li>

                                    <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Bakery
                                    </Link>
                                </li>
                                <li>
                                    <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Drinks
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="gallery" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Gallery</Link>
                        <Link to="testimonials" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Testimonials</Link>
                        <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'>Contact</Link>
                        <Button title="Login" />
                    </nav>
                    <div className="md:hidden flex items-center">
                        {menu ? (
                            <AiOutlineClose size={25} onClick={handleChange} />
                        ) : (
                            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
        {/* textColor: "#0B0C10",
                <div className={`${menu ? "translate-x-0" : -"translate-x-full"} lg-hidden flex flex-col absolute bg-[#EAE7DC] text-[#0B0C10] left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>

                    <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Home</Link>
                    <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>AboutUs</Link>
                    <Link to="features" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Features</Link>
                    <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Menu</Link>
                    <Link to="gallery" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Gallery</Link>
                    <Link to="testimonials" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Testimonials</Link>
                    <Link to="contact" spy={true} smooth={true} duration={500} className='hover:text-lgColor transition-all cursor-pointer'
                    onClick={closeMenu}>Contact</Link>
                </div> */}
            </div>
        </div>
    );
}

export default Navbar;
