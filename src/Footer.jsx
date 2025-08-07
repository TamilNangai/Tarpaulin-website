import Fb from './assets/footer/footerDv/Facebook .png'
import Insta from './assets/footer/footerDv/Instagram .png'
import Place from './assets/footer/footerDv/Place Marker.png'
import Twit from './assets/footer/footerDv/Twitter .png'
import Vector from './assets/footer/footerDv/Vector.png'
import What from './assets/footer/footerDv/WhatsApp.png'

function Footer() {
    return (
        <div>
            <footer className='w-full h-auto bg-gray-100 max-sm:h-auto '>
                <p className='text-3xl font-bold  p-8 text-black  font-[Abhaya-Libre] max-lg:text-3xl  max-sm:text-[14px] max-sm:p-1 '>SAFE GUARD TARPS</p>
                <div className='flex  justify-evenly pb-1 '>
                    <div className='flex lg:w-[40%]  lg:ms-36 md:w-[50%] w-[40%]'>
                        <img className='md:w-[30px] md:h-[45px] m-[0px_20px_0px_20px] w-[20px] h-[25px]' src={Place} alt="place" />
                        <p className='lg:w-50 lg:h-40  font-[Be-Vietnam] font-normal lg:leading-10 md:leading-8 text-2xl md:w-[189px] md:h-[135px]    md:text-[18px] w-[86px] h-[57.04px] text-[8px] leading-3'>
                            123, Raja Street,
                            Kumbakonam,
                            Thanjavur District,
                            Tamil Nadu, 612001.
                        </p>
                    </div>
                    <div className='me-1 border shadow-[0px_5px_5px] lg:h-[200px] md:h-[180px] border-black  border-solid  shadow-gray-400 h-[58.95px]'></div>
                    <div className=' border shadow-[0px_5px_5px]  lg:h-[200px]  md:h-[180px] border-black  border-solid shadow-gray-400 h-[58.95px]'></div>
                    <div className='w-50 max-sm:hidden'>
                        <ul className='list-none font-[Be-Vietnam]  text-2xl font-bold p-0'>
                            <li className='mb-4 flex justify-center sm:m-0 sm:text-[18px] lg:text-[25px] '>Home</li>
                            <li className='mb-4 flex justify-center sm:m-0 sm:text-[18px] lg:text-[25px]'>About us</li>
                            <li className='mb-4 flex justify-center sm:m-0 sm:text-[18px] lg:text-[25px]'>Product</li>
                            <li className='mb-4 flex justify-center sm:m-0 sm:text-[18px] lg:text-[25px]'>Contact us</li>
                        </ul>
                    </div>
                    <div className='me-1   border shadow-[0px_20px_10px_0px]  h-[200px]  max-lg:h-[180px] border-black  border-solid  shadow-gray-500 max-sm:hidden  max-sm:relative  max-sm:right-25'></div>
                    <div className=' border   shadow-[0px_20px_10px_0px]  h-[200px]  max-lg:h-[180px] border-black  border-solid shadow-gray-500 max-sm:hidden'></div>
                    <div className='w-50 '>
                        <p className='max-lg:ms-3 max-sm:ms-3 max-sm:mb-0 mb-0 font-bold font-[Abhaya-Libre] lg:hidden max-sm:text-[12px] max-lg:text-[18px]'>Follow us on</p>
                        <div className='flex'>
                            <a href="https://www.facebook.com/"> <img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={Fb} alt="fb" /></a>
                            <a href="https://www.whatsapp.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={What} alt="what" /></a>
                            <a href="https://www.instagram.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={Insta} alt="insta" /></a>
                            <a href="https://www.twitter.com/"><img className='m-[0px_10px_0px_10px] max-lg:w-[40px] max-lg:h-[40px] max-sm:w-[25px] max-sm:h-[25px]' src={Twit} alt="twit" /></a>
                            <a href="https://www.threads.com/"><img className='m-[0px_13px_0px_10px] max-lg:w-[30px] max-lg:h-[35px] max-sm:w-[20px] max-sm:h-[23px]' src={Vector} alt="vector" /></a>
                        </div>
                    </div>
                </div>
            </footer>
            <div className='w-full h-8 bg-black max-sm:hidden'>
                <span className='w-56 h-7  font-[Be-Vietnam]  font-bold size-5 text-white relative left-1/2 max-lg:left-[350px]'>Designed  by  DesFlyer</span>
            </div>
        </div>
    );
}
export default Footer