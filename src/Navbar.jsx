import React, { useState } from "react";
import Menu from './assets/contactus/Menu.png';
import Home from './assets/contactus/Home.png';
import About from './assets/contactus/About.png';
import Sell from './assets/contactus/Sell.png';
import Phonemessage from './assets/contactus/Phone Message.png';
import Cancel from './assets/contactus/Cancel.png';
import { Link } from "react-router-dom";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div id='nav' className="w-full h-[72px]">
            <nav className="w-full h-[72px] bg-gray-300 border flex justify-between items-center">
                <span className="h-[41px] font-[Aref-Ruqaa] font-bold lg:text-[35px] md:text-[25px] ml-[50px] mb-[15px] text-[25px] max-lg:m-3 max-lg:p-0">
                    SAFE GUARD TARPS
                </span>

                <div className='md:hidden m-4'>
                    <button onClick={() => setShowMenu(!showMenu)} >
                        <img src={Menu} alt="menu" />
                    </button>
                </div>



                {showMenu && (
                    <div className="bg-white fixed inset-0  border h-[72px] ">
                        <ul className="font-[Abhaya-Libre] font-bold text-[10px] flex justify-evenly p-0  mt-3  gap-2 text-center">
                            <li><Link to="/" className="no-underline "><img src={Home} alt="home" />Home</Link></li>
                            <li><Link to="/Aboutpage" className="no-underline"><img src={About} alt="About" />About</Link></li>
                            <li><Link to="/Product" className="no-underline "><img src={Sell} alt="Sell" />Product</Link></li>
                            <li><Link to="/Contactpage" className="no-underline  "><img src={Phonemessage} alt="Phonemessage" />Contact us</Link></li>
                            <li><button onClick={() => setShowMenu(false)}><img src={Cancel} alt="Cancel" />Cancel</button></li>
                        </ul>
                    </div>
                )}


                <div className='max-sm:hidden flex'>
                    <ul className="font-[Abhaya-Libre] font-bold text-[24px] md:flex mt-3 max-lg:text-[18px]">
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0 ">
                            <Link to="/" className="no-underline ">Home</Link>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0  ">
                            <Link to="/Aboutpage" className="no-underline">About</Link>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0 ">
                            <Link to="/Product" className="no-underline ">Product</Link>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0 ">
                            <Link to="/Contactpage" className="no-underline  ">Contact us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
