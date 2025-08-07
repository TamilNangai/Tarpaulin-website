import React, { useState } from "react";
import Menu from './assets/contactus/Menu.png';
import Home from './assets/contactus/Home.png';
import About from './assets/contactus/About.png';
import Sell from './assets/contactus/Sell.png';
import Phonemessage from './assets/contactus/Phone Message.png';
import Cancel from './assets/contactus/Cancel.png';

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
                            <li className=" hover:text-blue-600"><a href="#Home" className="no-underline "><img src={Home} alt="home" />Home</a></li>
                            <li><a href="#About" className="no-underline text-black hover:bg-blue-600 "><img src={About} alt="About" />About</a></li>
                            <li><a href="#Product" className="no-underline text-black hover:text-blue-600 "><img src={Sell} alt="Sell" />Product</a></li>
                            <li><a href="#Conduct" className="no-underline text-black hover:bg-blue-600 "><img src={Phonemessage} alt="Phonemessage" />Contact us</a></li>
                            <li><button onClick={() => setShowMenu(false)}><img src={Cancel} alt="Cancel" />Cancel</button></li>
                        </ul>
                    </div>
                )}


                <div className='max-sm:hidden flex'>
                    <ul className="font-[Abhaya-Libre] font-bold text-[24px] md:flex mt-3 max-lg:text-[18px]">
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0 text-black hover:text-[#0496ff]">
                            <a href="#Home" className="no-underline ">Home</a>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0">
                            <a href="#About" className="no-underline text-black hover:bg-blue-600">About</a>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0">
                            <a href="#Product" className="no-underline text-black hover:text-blue-600">Product</a>
                        </li>
                        <li className="mx-[30px] m-[20px] max-lg:m-3 max-lg:p-0">
                            <a href="#Conduct" className="no-underline text-black hover:bg-blue-600">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>            
        </div>
    );
}

export default Navbar;
