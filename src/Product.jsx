const Product=() =>{
return(
<div className="bg-white w-4/3 text-3xl ">
      <h2 className=" m-5 text-7xl text-center font-bold font-[Abhaya-Libre]">Contact us</h2>
        {/* Left */}
          <h3 className="text-5xl font-[Be-Vietnam] font-semibold px-7 m-5">OFFICE DETAILS</h3>
           <div className="flex flex-col lg:flex-row justify-between ">
               <div className="flex flex-row md:w-full lg:w-1/2 space-y-4 mt-6 mx-20">
                     <div className='leading-normal'>   
                      <img className='w-20 ' src={image3} alt="image3"/><br></br>
                      <img className='w-20' src={image1} alt="image1"/><br></br>
                        <img className='w-20' src={image2} alt="image2"/><br></br>
                        </div>
                      <div className='leading-normal text-3xl font-bold'>
                         <p className=" items-center px-5"> 995082301558</p><br></br>
                         <p className=" items-center px-5"> Desflyer.tech@gmail.com</p><br></br>
                        <p className=" flex items-center px-5">
                           123, Raja Street, Kumbakonam,<br/>
                           Thanjavur District,<br/>
                           Tamil Nadu, 612001, India.
                        </p>
                      </div>
                </div>
        {/* Right */}
        <div className="flex flex-col bg-gray-200 pl-15 rounded-3xl shadow-md">
          <h3 className=" font-[Abhaya-Libre] text-center text-7xl font-semibold mt-5 mb-4">Chat With Us</h3>
          <div className="flex flex-row px-2 mt-1 lg:w-full">
          <form className="space-y-4 px-5 ">
            <div className="flex flex-col w-full mt-5 md:flex-row gap-3">
              <input type="text" placeholder="First Name" className="w-1/3 p-2 border rounded-xl  bg-gray-200 border-black" />
              <input type="text" placeholder="Last Name" className="w-1/3 p-2 border rounded-xl  bg-gray-200 border-black" />
            </div> <br></br>
            <input type="email" placeholder="Enter Email" className="w-4/6 p-2 border rounded-xl bg-gray-200 border-black" /><br /><br />
               <input type="text" placeholder="Contact No" className="w-4/6 p-2 border rounded-xl bg-gray-200 border-black" /><br /><br />
            <input type="text" placeholder="Enter Address" className="w-4/6 p-2 border rounded-xl  bg-gray-200 border-black" /><br /><br />
            <input type="text" placeholder="Pincode" className="w-4/6 p-2 border rounded-xl  bg-gray-200 border-black" /><br /><br />
            <select className="w-4/6 p-2 border rounded-xl  bg-gray-200 border-black"><br /><br />
              <option>Select Product</option>
              <option>Tarpaulin</option>
              <option>Shading Net</option>
              <option>Waterproof Cover</option>
            </select><br /><br />
            <input placeholder="Message" className="w-4/6 p-2 border rounded-xl  bg-gray-200 border-black"></input>
               <button className="flex items-center px-4 border-2 border-black py-2 m-5 font-bold  bg-gray-300 shadow-2xl text-black rounded-full">Submit</button>
               </form>
              <div className=" felx-col lg:w-1/4 mb-12 mt-5 bg-black text-white rounded-xl">
                <p className="p-4 text-center text-2xl">Tarpaulins are used across a wide range of applications, from the construction sector to agriculture, from home use to commercial use. </p>
                <img clasNmae="w-5 h-5 " src={image} alt="image"/>
                <p className="p-4 text-center text-2xl"> In construction projects, tarpaulins are used to protect materials and equipment, while in agriculture, they cover products to provide protection.</p>
               </div>
               </div>
          </div>
             </div>
                </div>
);
}

export default Product;