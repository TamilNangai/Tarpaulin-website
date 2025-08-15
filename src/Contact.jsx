import image from'./assets/rimg/image.png'
import image1 from'./assets/cimg/Email.png'
import image2 from'./assets/cimg/location.png'
import image3 from'./assets/cimg/Phone.png'

function Contact() {
  return (
    <div>
    <div className="bg-white w-4/3">
      <h2 className=" mt-3 text-[45px] text-center font-bold font-[Abhaya-Libre]">Contact us</h2>
        {/* Left */}
          <h3 className="text-[31px] font-[Be-Vietnam] font-semibold px-5 m-5">OFFICE DETAILS</h3>
           <div className="flex flex-col lg:flex-row justify-between ">
               <div className="flex flex-row md:w-full lg:w-1/2  mt-1 mx-20">
                     <div className='space-y-1'>   
                      <img className='w-15 h-10' src={image3} alt="image3"/><br></br>
                      <img className='w-15 h-10' src={image1} alt="image1"/><br></br>
                        <img className='w-15 h-10' src={image2} alt="image2"/><br></br>
                        </div>
                      <div className='space-y-1'>
                         <p className="text-[23px] items-center px-5"> 995082301558</p><br></br>
                         <p className="text-[23px] items-center mt-0 px-5"> Desflyer.tech@gmail.com</p><br></br>
                        <p className=" text-[18px] items-center px-5">
                           123, Raja Street, Kumbakonam,<br/>
                           Thanjavur District,<br/>
                           Tamil Nadu, 612001, India.
                        </p>
                      </div>
                </div>
        {/* Right */}
        <div className="flex flex-col bg-gray-200 rounded-3xl px-3 shadow-md">
          <h3 className=" font-[Abhaya-Libre] text-center text-[40px] font-semibold mt-2 mb-2">Chat With Us</h3>
          <div className="flex flex-row mt-1 gap-0 lg:w-full">
          <form className="space-y-1">
            <div className="flex flex-col w-full mt-2 md:flex-row gap-3">
              <input type="text" placeholder="First Name" className="w-1/3 p-2 border rounded-xl  bg-gray-200 border-black" />
              <input type="text" placeholder="Last Name" className="w-1/3 p-2 border rounded-xl  bg-gray-200 border-black" />
            </div> <br></br>
            <input type="email" placeholder="Enter Email" className="w-[350px] p-2 border rounded-xl bg-gray-200 border-black" /><br /><br />
               <input type="text" placeholder="Contact No" className="w-[350px] p-2 border rounded-xl bg-gray-200 border-black" /><br /><br />
            <input type="text" placeholder="Enter Address" className="w-[350px] p-2 border rounded-xl  bg-gray-200 border-black" /><br /><br />
            <input type="text" placeholder="Pincode" className="w-[350px] p-2 border rounded-xl  bg-gray-200 border-black" /><br /><br />
            <select className="w-[350px] p-2 border rounded-xl  bg-gray-200 border-black"><br /><br />
              <option>Select Product</option>
              <option>Tarpaulin</option>
              <option>Shading Net</option>
              <option>Waterproof Cover</option>
            </select><br /><br />
            <input placeholder="Message" className="w-[350px] p-2 border rounded-xl  bg-gray-200 border-black"></input>
               <button className="flex align-center px-4 border-2 border-black py-2 mx-[120px] mt-4  font-bold  bg-gray-300 shadow-2xl text-black rounded-full">Submit</button>
               </form>
              <div className=" felx-col lg:w-1/3 mt-2 mb-[140px] pl-2  bg-black text-white rounded-xl">
                <p className="p-4 text-center text-[9.5px]">Tarpaulins are used across a wide range of applications, from the construction sector to agriculture, from home use to commercial use. </p>
                <img clasNmae="w-5 " src={image} alt="image"/>
                <p className="p-4  text-center text-[9.5px]"> In construction projects, tarpaulins are used to protect materials and equipment, while in agriculture, they cover products to provide protection.</p>
               </div>
               </div>
          </div>
             </div>
                </div>
                
                 </div>
                
          );
          }
          export default Contact;