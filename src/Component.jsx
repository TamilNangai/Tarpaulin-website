import image1 from'./assets/left/a1.png'
import image2 from'./assets/left/a2.png'
import image3 from'./assets/left/a3.png'
const Component=() => {
  return(
        
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="w-1/3">
            <img className="w-[250px] h-[230px]" src={image1} alt="image1"/>
            </div>
              <div className="2/3">
                  <h1 className="text-1xl font-[Be-Vitenam] ">Packing</h1>
               <p className="text-base ">Silpaulin films are moisture resistant and protect products from corrosion. This packing is widely used by industries for oversize jobs/odd sizes products which are shipped overseas.Silpaulin can withstand the pressure of wire ropes and other impacts during transportation or while loading & unloading during the shipment. It provides protection against wear and tear caused due to external environment. Silpaulin packing also gives an aesthetic look to the product packed."</p>
              <div className="flex flex-col lg:flex-row gap-6">
                   <img className="w-[100px] h-[80px]" src={image2} alt="image2"/>
                <img className="w-[100px] h-[80px]" src={image3} alt="image3"/>
                <ol className="text-xs pl-0">
                      <li>1.Machine covers</li>
                      <li>2.Flexi container liners</li>
                      <li>3.Shipping bags & drum liners</li>
                      <li>4.Industrial transport packaging</li>
                      <li>5.Packing of heavy project/ODC-cargo</li>
                  </ol>
                    </div>
                <img/>
             </div>
             
            </div>
           
               
             
  );
}
export default Component;